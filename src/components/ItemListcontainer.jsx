import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../main';
import ItemList from './ItemList';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = async () => {
      let itemCollection = collection(db, 'item');
      if (categoryId) {
        itemCollection = query(itemCollection, where('categoryld', '==', categoryId));
      }
      const itemSnapshot = await getDocs(itemCollection);
      const itemList = itemSnapshot.docs.map((doc) => doc.data());
      setItems(itemList);
    };
    getItems();
  }, [categoryId]);

  return (
    <div className='ItemList'>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;




