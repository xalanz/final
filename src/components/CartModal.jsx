import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity, 0);

  return (
    <div className="cart-modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-cart" onClick={onClose}>&times;</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <div className="item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}

            <div className="cart-total">
              <p>Total: ${total.toFixed(2)}</p>
              <button className="checkout-btn">
                Proceder al pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}