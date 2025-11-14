import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react';

const Formulario = () => {

    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [conficontrasena, setConficontrasena] = useState("");

    const [errores, setErrores] = useState({
        name: "",
        apellido: "",
        correo: "",
        contrasena: "",
        conficontrasena: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempErrors = {
            name: "",
            apellido: "",
            correo: "",
            contrasena: "",
            conficontrasena: ""
        };

        if (name.trim() === "") {
            tempErrors.name = "Debes ingresar un nombre";
        } else if (name.length < 4) {
            tempErrors.name = "El nombre debe tener al menos 4 caracteres";
        }

        if (apellido.trim() === "") {
            tempErrors.apellido = "Debes ingresar un apellido";
        }

        if (correo.trim() === "") {
            tempErrors.correo = "Debes ingresar un correo";
        } else if (!correo.includes("@") || correo.length < 10) {
            tempErrors.correo = "El correo debe tener mínimo 10 caracteres y contener @";
        }

        if (contrasena === "") {
            tempErrors.contrasena = "Debes ingresar una contraseña";
        }

        if (conficontrasena === "") {
            tempErrors.conficontrasena = "Confirma la contraseña";
        } else if (contrasena !== conficontrasena) {
            tempErrors.conficontrasena = "Las contraseñas no coinciden";
        }

        const hayErrores = Object.values(tempErrors).some(err => err !== "");
        if (hayErrores) {
            setErrores(tempErrors);
            return;
        }

        alert("Formulario enviado correctamente");
    };

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errores.name && <p className="text-danger">{errores.name}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input 
                    type="text"
                    className="form-control"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
                {errores.apellido && <p className="text-danger">{errores.apellido}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input 
                    type="text"
                    className="form-control"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                {errores.correo && <p className="text-danger">{errores.correo}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input 
                    type="password"
                    className="form-control"
                    id="contrasena"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                {errores.contrasena && <p className="text-danger">{errores.contrasena}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="conficontrasena" className="form-label">Confirmar contraseña</label>
                <input 
                    type="password"
                    className="form-control"
                    id="conficontrasena"
                    value={conficontrasena}
                    onChange={(e) => setConficontrasena(e.target.value)}
                />
                {errores.conficontrasena && <p className="text-danger">{errores.conficontrasena}</p>}
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">
                Crear Superhéroe
            </button>

        </form>
    );
};

export default Formulario;
