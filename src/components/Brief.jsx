import React from 'react';

function Brief({ items, total, onRemoveFromCart, onCheckout }) {
  return (
    <div>
      <h2>Resumen de compra</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.imagen} alt={item.nombre} width="50" height="50" />
            {item.nombre} x {item.quantity} = ${item.precio * item.quantity}
            <button onClick={() => onRemoveFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Brief;


