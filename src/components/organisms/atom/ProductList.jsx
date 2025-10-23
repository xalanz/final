import React from "react";
import { useCart } from "../../../context/CartContext.jsx";

import gabineteWhite from "../../img/Gabinete-Prisma-Pro-White-RGB-EATX-Vidrio-Templado-USB-3.0-1-0v-300x300.png";
import gabineteBlack from "../../img/D_NQ_NP_722439-MLC48429949421_122021-O-gabinete-pc-gamer-gabinete-atx-micr-torre-pc-gabinetes-gamer.webp";
import gabinetePink from "../../img/gabinete-gamer-lacheris-pink-con-fuente-de-poder-600w.jpg";
import gabineteATX from "../../img/Gabinetes-de-computadora-ATX-OEM-Cool-y-Handsome-para-gamers-con-vidrio-templado-ventiladores-de-colores-y-refrigeraci-n-por-agua.avif";
import mouseErgonomic from "../../img/ma1.jpg";
import mouseRedragon from "../../img/m1.jpg";
import mouseWhite from "../../img/mouse-gamer-logitech-910-006170-g502-x-plus-white-mouse-gamer-logitech-910-006170-g502-x-plus-white.jpg";
import mouseErg2 from "../../img/D_NQ_NP_839136-MLA84192292302_052025-O.webp";
import tecladoBlanco from "../../img/images.jpg";
import tecladoNegro from "../../img/teclado egro.avif";
import audifonosGato from "../../img/verdeverde.png";
import audifonos from "../../img/negroverde12.png";

const products = [
    { id: 1, name: "Gabinete WHITE", price: "$60.000", img: gabineteWhite },
    { id: 2, name: "Gabinete gamer BLACK", price: "$40.000", img: gabineteBlack },
    { id: 3, name: "Gabinete gamer LACHERIS PINK", price: "$80.000", img: gabinetePink },
    { id: 4, name: "Gabinete ATX", price: "$100.000", img: gabineteATX },
    { id: 5, name: "Mouse ergonomic", price: "$30.000", img: mouseErgonomic },
    { id: 6, name: "Mouse REDRAGON", price: "$30.000", img: mouseRedragon },
    { id: 7, name: "Mouse WHITE", price: "$25.000", img: mouseWhite },
    { id: 8, name: "Mouse ergonoic", price: "$35.000", img: mouseErg2 },
    { id: 9, name: "Teclado blanco", price: "$35.990", img: tecladoBlanco },
    { id: 10, name: "Teclado negro", price: "$20.000", img: tecladoNegro },
    { id: 11, name: "Audifonos GATO", price: "$30.000", img: audifonosGato },
    { id: 12, name: "Audifonos", price: "$15.000", img: audifonos },
];

export default function ProductList() {
    const { addToCart } = useCart();

    return (
    <>
    <main className="product container">
        <h2>Todos los productos</h2>
        <div className="product-content">
        {products.map((product) => (
            <div className="product-1" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="product-txt">
                <h3>{product.name}</h3>
                <div className="price">
                <p>{product.price}</p>
                <button className="btn-2" onClick={() => addToCart(product)}>
                    Agregar al carrito
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>
        
    </main>
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
    </>
    );
}
