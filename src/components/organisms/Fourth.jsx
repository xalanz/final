import React from 'react'

export default function footer() {
    return (
        <footer className="footer">
    <div className="footer-content">
        <p>© 2025 Level-Up Gamer - Todos los derechos reservados</p>
    </div>

    <nav className="top-navbar">
        <ul>
        <li>
            <a href="tel:+56981654943">📞 Ayuda: +56 9 8165 4943</a>
        </li>
        <li>
            <a href="#resenas">⭐ Reseñas</a>
        </li>
        <li>
            <a href="#tracking">📦 Estado de mi paquete</a>
        </li>
        <li>
        <a href="https://www.google.com/maps?q=Padre+Mariano+356,+7500026+Providencia,+Región+Metropolitana" target="_blank" rel="noopener noreferrer">🏪 Centro de ayuda - Providencia</a>
        </li>
        </ul>

        <div className="social-media">
        <p>Síguenos:</p>
        <a
            href="https://www.instagram.com/p/DOrnNADkrjF/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
            src="https://www.instagram.com/p/DOrnNADkrjF/"
            alt="Instagram Level-Up Gamer"
            className="social-icon"
            />
        </a>
        <a
            href="https://www.youtube.com/watch?v=lRejW7XyNDg"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
            src="https://www.youtube.com/watch?v=lRejW7XyNDg"
            alt="YouTube Level-Up Gamer"
            className="social-icon"
            />
        </a>
        </div>
    </nav>
    </footer>
    );
}
