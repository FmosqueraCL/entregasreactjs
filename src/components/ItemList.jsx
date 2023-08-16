import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div className="container-list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>Precio: ${item.price}</p>
            <Link to={`/item/${item.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;


