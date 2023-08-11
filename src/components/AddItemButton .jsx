import React from 'react';

function AddItemButton({ onAdd }) {
  return (
    <div>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}

export default AddItemButton;

