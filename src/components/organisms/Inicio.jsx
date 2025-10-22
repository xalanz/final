import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Level-Up.png';


export default function Inicio() {
    return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo Level-Up Gaming" className="logo" />
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