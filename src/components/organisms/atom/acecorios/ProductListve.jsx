import React from "react";
import { useCart } from "../../../../context/CartContext.jsx";

// import images from the local img folder so bundler can resolve them
import img1 from "../../../img/polera 1.webp";
import img2 from "../../../img/polera3.webp";
import img3 from "../../../img/polera4.webp";
import img4 from "../../../img/polera5.webp";
import img5 from "../../../img/poleron1.jpg";
import img6 from "../../../img/poleron2.jpg";
import img7 from "../../../img/poleron3.jpg";
import img8 from "../../../img/poleron4.jpg";
import img9 from "../../../img/1.webp";
import img10 from "../../../img/2.webp";
import img11 from "../../../img/3.jpeg";
import img12 from "../../../img/faker2.jpg";

const products = [
    { id: 1, name: "Polera (blanca)", price: "$150.000", img: img1 },
    { id: 2, name: "Polera", price: "$10.000", img: img2 },
    { id: 3, name: "Polera", price: "$7.000", img: img3 },
    { id: 4, name: "Polera", price: "$12.990", img: img4 },
    { id: 5, name: "Polerón de Naruto", price: "$120.000", img: img5 },
    { id: 6, name: "Polerón Totoro", price: "$20.000", img: img6 },
    { id: 7, name: "Polerón Totoro", price: "$25.000", img: img7 },
    { id: 8, name: "Polerón One Piece", price: "$35.000", img: img8 },
    { id: 9, name: "Jujutsu Kaisen", price: "$35.990", img: img9 },
    { id: 10, name: "Jujutsu Kaisen", price: "$20.000", img: img10 },
    { id: 11, name: "Jujutsu Kaisen", price: "$30.000", img: img11 },
    { id: 12, name: "Chaqueta T1", price: "$150.000", img: img12 },
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
