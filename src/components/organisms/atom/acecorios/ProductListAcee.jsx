import React from "react";
import { useCart } from "../../../../context/CartContext.jsx";

const products = [
    { id: 1, name: "", price: "$150.000", img: "../img/polera 1" },
    { id: 2, name: "Polera", price: "$10.000", img: "../img/polera3.webp" },
    { id: 3, name: "Polera", price: "$7.000", img: "../img/polera4.webp" },
    { id: 4, name: "Polera", price: "$12.990", img: "../img/polera5.webp" },
    { id: 5, name: "Polerón de Naruto", price: "$120.000", img: "../img/poleron1.jpg" },
    { id: 6, name: "Polerón Totoro", price: "$20.000", img: "../img/poleron2.jpg" },
    { id: 7, name: "Polerón Totoro", price: "$25.000", img: "../img/poleron3.jpg" },
    { id: 8, name: "Polerón One Piece", price: "$35.000", img: "../img/poleron4.jpg" },
    { id: 9, name: "Jujutsu Kaisen", price: "$35.990", img: "../img/1.webp" },
    { id: 10, name: "Jujutsu Kaisen", price: "$20.000", img: "../img/2.webp" },
    { id: 11, name: "Jujutsu Kaisen", price: "$30.000", img: "../img/3.jpeg" },
    { id: 12, name: "Chaqueta T1", price: "$150.000", img: "../img/faker2.jpg" },
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
