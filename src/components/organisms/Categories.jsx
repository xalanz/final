// Categories.jsx
import React from 'react'
import { Link } from 'react-router-dom'



export default function Categories() {
return (
    <section className="categories" id="categories">
    <h2>Nuestras Categorías</h2>
    <div className="categories-container">
        <div className="category">
        <h3>🎮 Electrónica</h3>
        <p>Encuentra los mejores productos electrónicos para tu experiencia gaming y oficina.</p>
        <Link to="/Electrónica" className="btn-category" >Ver má</Link>
        </div>

        <div className="category">
        <h3>👕 Vestuario</h3>
        <p>Moda y estilo gamer. Ropa cómoda y moderna para cada gamer. Expresa tu pasión con nuestras exclusivas colecciones.</p>
        <Link to="/Vestuario" className="btn-category" >Ver más   </Link>
        </div>

        <div className="category">
        <h3>🎧 Accesorios</h3>
        <p>Desde teclados mecánicos hasta mousepads profesionales, tenemos todo lo necesario para completar tu setup gaming perfecto.</p>
        <Link to="/Accesorios" className="btn-category">Ver más</Link>
        </div>
    </div>
    </section>
);
}
