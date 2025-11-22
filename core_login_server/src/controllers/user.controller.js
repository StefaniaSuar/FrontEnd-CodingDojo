const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXP = "10m";

function crearToken(u) {
  return jwt.sign({ id: u._id, correo: u.correo }, JWT_SECRET, {
    expiresIn: JWT_EXP,
  });
}

exports.registro = async (req, res) => {
  try {
    const { nombre, apellido, correo, contraseña } = req.body;
    if (!nombre || !apellido || !correo || !contraseña)
      return res.status(400).json({ ok: false, mensaje: "Campos requeridos" });
    if (contraseña.length < 8)
      return res
        .status(400)
        .json({ ok: false, mensaje: "Contraseña muy corta" });

    const existe = await User.findOne({ correo: correo.toLowerCase().trim() });
    if (existe)
      return res
        .status(400)
        .json({ ok: false, mensaje: "Correo ya registrado" });

    const hashed = await bcrypt.hash(contraseña, 10);
    const nuevo = await User.create({
      nombre,
      apellido,
      correo: correo.toLowerCase().trim(),
      contraseña: hashed,
    });
    const token = crearToken(nuevo);
    res.cookie("token_usuario", token, { httpOnly: true, maxAge: 600000 });
    res.status(201).json({ ok: true, usuario: nuevo, token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, mensaje: "Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    if (!correo || !contraseña)
      return res.status(400).json({ ok: false, mensaje: "Campos requeridos" });
    const u = await User.findOne({ correo: correo.toLowerCase().trim() });
    if (!u)
      return res
        .status(400)
        .json({ ok: false, mensaje: "Credenciales inválidas" });
    const ok = await bcrypt.compare(contraseña, u.contraseña);
    if (!ok)
      return res
        .status(400)
        .json({ ok: false, mensaje: "Credenciales inválidas" });
    const token = crearToken(u);
    res.cookie("token_usuario", token, { httpOnly: true, maxAge: 600000 });
    res.json({ ok: true, usuario: u, token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, mensaje: "Error" });
  }
};
