import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import logo from '../img/Level-Up.png';

export default function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <div className="login-logo-container">
                    <img
                        src={logo}
                        alt="Logo Level-Up Gaming"
                        className="login-logo-img"
                    />
                </div>
                
                <div className="login-input-container">
                    <i className="fa-solid fa-envelope" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="login-input"
                        placeholder="Correo"
                    />
                </div>

                <div className="login-input-container">
                    <i className="fa-solid fa-lock" />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="login-input"
                        placeholder="Contraseña"
                    />
                </div>

                <Link to="/">
                    <button type="button" className="login-submit-btn">Iniciar</button>
                </Link>

                <p className="login-register-text">
                    ¿No te has registrado? <Link to="/registro" className="login-register-link">Regístrate aquí</Link>
                </p>
            </form>
        </div>
    );
}
