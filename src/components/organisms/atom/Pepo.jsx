import React from "react";

export default function Pepo() {
return (
    <header className="header">
    <div className="menu container">
        <div className="logo">Level-Up</div>
        <nav className="navbar">
        <ul>
            <li><a href="#inicio">Iniciar Sesión</a></li>
            <li><a href="#productos">Ver Categoría</a></li>
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
