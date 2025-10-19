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
        <a href="#centro-ayuda">🏪 Centro de ayuda - Melipilla</a>
        </li>
        </ul>

        <div className="social-media">
        <p>Síguenos:</p>
        <a
            href="https://www.instagram.com/p/DQAOTOWiLZo/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
            src="https://via.placeholder.com/35x35/E4405F/ffffff?text=IG"
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
