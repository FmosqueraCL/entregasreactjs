import React from 'react';

function ItemDetail({ producto }) {
  return (
    <div className="item-detail">
      <h1 className="item-detail__title">{producto.nombre}</h1>
      <img className="item-detail__image" src={producto.imagen} alt={producto.nombre} />
      <p className="item-detail__price">Precio: ${producto.precio}</p>
      <p className="item-detail__description">Descripción: {producto.descripcion}</p>
    </div>
  );
}


export default ItemDetail;
