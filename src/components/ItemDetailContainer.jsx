import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../main';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProducto = async () => {
      const productoRef = doc(db, 'item', id);
      const productoDoc = await getDoc(productoRef);
      if (productoDoc.exists()) {
        setProducto(productoDoc.data());
      }
    };
    getProducto();
  }, [id]);

  return (
    <div className='Detalle'>
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
}

export default ItemDetailContainer;


