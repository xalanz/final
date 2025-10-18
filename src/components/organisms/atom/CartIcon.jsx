import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext.jsx';
import CartModal from '../../../context/CartModal.jsx';

export default function CartIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="cart-container" onClick={() => setIsModalOpen(true)}>
        <div className="cart-icon">
          🛒
        </div>
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </div>

      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}