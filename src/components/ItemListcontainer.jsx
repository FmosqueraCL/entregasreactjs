import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer({ productos }) {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const productosDeCategoria = productos.filter(
        (p) => p.categoria === id
      );
      setProductosFiltrados(productosDeCategoria);
    } else {
      setProductosFiltrados(productos);
    }
  }, [id, productos]);

  return (
    <div>
      <h1>Lista de productos</h1>
      <ItemList productos={productosFiltrados} />
    </div>
  );
}

export default ItemListContainer;

