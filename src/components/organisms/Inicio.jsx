import React from 'react'
import { Link } from 'react-router-dom'


export default function Inicio() {
    return (
    <header className="header">
      <div className="container">
        <img
          src="https://via.placeholder.com/150x60/62d384/ffffff?text=Level-Up"
          alt="Logo Level-Up Gaming"
          className="logo"
        />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/inicio">Inicio de Sesión</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}