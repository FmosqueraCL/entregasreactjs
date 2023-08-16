import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton ';

function ItemDetail({ producto }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} />
      <p>Precio: ${producto.price}</p>
      <Description description={producto.description} />
      <ItemQuantitySelector
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        maxQuantity={producto.stock}
      />
      <AddItemButton item={producto} quantity={quantity} />
    </div>
  );
}

export default ItemDetail;
