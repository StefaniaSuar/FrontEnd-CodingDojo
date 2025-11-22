const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const token =
      req.headers["token_usuario"] ||
      (req.cookies ? req.cookies.token_usuario : null);

    if (!token) {
      return res.status(401).json({ ok: false, mensaje: "Token requerido" });
    }

    const dec = jwt.verify(token, JWT_SECRET);
    req.usuario = { id: dec.id, correo: dec.correo };

    next();
  } catch (err) {
    return res.status(401).json({ ok: false, mensaje: "Token inválido o expirado" });
  }
};
