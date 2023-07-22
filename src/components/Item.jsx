import React from 'react';
import { Link } from 'react-router-dom';

function Item({ producto }) {
  return (
    <div className="product-card">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver detalles</Link>
    </div>
  );
}

export default Item;