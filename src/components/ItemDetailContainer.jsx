import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({ productos, onAddToCart }) {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productoEncontrado = productos.find((p) => p.id === parseInt(id));
    setProducto(productoEncontrado);
  }, [id, productos]);

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} onAddToCart={onAddToCart} />
      ) : (
        <p>Cargando información del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

