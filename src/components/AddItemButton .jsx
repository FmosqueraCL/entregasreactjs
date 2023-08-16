import React from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../main';
import { useCart } from '../context/CartContext';

function AddItemButton({ item, quantity }) {
  const { addItem } = useCart();

  const handleClick = async () => {
    console.log('AddItemButton handleClick');
    const itemDoc = doc(db, 'item', item.id.toString());
    const itemSnapshot = await getDoc(itemDoc);
    const itemData = itemSnapshot.data();
    console.log('itemData:', itemData);
    if (quantity > itemData.stock) {
      alert(`Lo siento, solo hay ${itemData.stock} unidades disponibles en stock.`);
    } else {
      addItem(item, quantity);
      await updateDoc(itemDoc, { stock: itemData.stock - quantity });
      console.log('Stock updated:', itemData.stock - quantity);
    }
  };

  return <button onClick={handleClick}>Agregar al carrito</button>;
}

export default AddItemButton;

