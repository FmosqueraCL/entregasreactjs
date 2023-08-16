import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Brief() {
  const { cart, removeItem } = useContext(CartContext);
  const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  return (
    <div className='Brief'>
      <h2>Carrito de compra</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            {item.title} x{item.quantity} (${item.price})
            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cartTotal}</p>
    </div>
  );
}

export default Brief;





