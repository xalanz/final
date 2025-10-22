import React from "react";
import { useCart } from "../../../../context/CartContext.jsx";

// import images from  de las imagenes de

import sillavalo from "../../../img/sillavalo.jpg";
import alfombra from "../../../img/alfombra.jpg";
import mouspad from "../../../img/mouspad.webp";
import portaaudifono from "../../../img/portaaudifono.jpeg";
import escritorio from "../../../img/escritorio.jpg";
import sillarosada from "../../../img/sillarosada.png";
import luzled from "../../../img/luzled.jpg";
import mouspadrojo from "../../../img/mouspadrojo.jpg";
import cojin from "../../../img/cojin.jpg";
import cojin2 from "../../../img/cojin2.jpg";
import sillalol from "../../../img/sillalol.webp";
import focodeluz from "../../../img/focodeluz.webp";

const products = [
    { id: 1, name: "Silla Gamer VALORANT REYNA", price: "$150.000", img: sillavalo },
    { id: 2, name: "Alfombra gamer", price: "$10.000", img: alfombra },
    { id: 3, name: "Mouspad", price: "$7.000", img: mouspad },
    { id: 4, name: "Porta audifonos", price: "$12.990", img: portaaudifono },
    { id: 5, name: "Escritorio", price: "$120.000", img: escritorio },
    { id: 6, name: "Silla gamer", price: "$150.000", img: sillarosada },
    { id: 7, name: "Tira Led para TV RGB USB", price: "$10.000", img: luzled },
    { id: 8, name: "mouse pad", price: "$35.000", img: mouspadrojo },
    { id: 9, name: "silla gamer", price: "$120.00", img: cojin },
    { id: 10, name: "silla gamer repuesto", price: "$20.000", img: cojin2 },
    { id: 11, name: "silla gamer", price: "$300.000", img: sillalol },
    { id: 12, name: "Audifonos", price: "$15.000", img: focodeluz },
];

export default function ProductListAcee() {
    const { addToCart } = useCart();

    return (
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
    );
}
