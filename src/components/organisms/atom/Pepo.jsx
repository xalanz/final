import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Pepo() {
    return (
        <header className="hola">
            <div className="menu container">
                <div className="logoos">Level-Up</div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/inicio" className="btn-category">Inicio secion </Link>
                        </li>
                                    <li>
                                        <HashLink to="/#categories">Ver Categoría</HashLink>
                                    </li>
                    </ul>
                </nav>
            </div>

            <div className="header-conta-container">
                <div className="header-txt">
                    <h1>
                        Compra tus <span style={{ color: "#00e676" }}>productos</span> <br /> favoritos aquí
                    </h1>
                    <p>
                        En Level-Up Gamer encontrarás todo lo necesario para crear el setup
                        perfecto. Ofrecemos sillas ergonómicas, alfombras gaming, porta
                        audífonos, mousepads con iluminación y mucho más.
                    </p>
                </div>
            </div>
        </header>
    );
}
