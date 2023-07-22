import React from 'react';
import Item from './Item';

function ItemList({ productos }) {
  return (
    <div className="container">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;