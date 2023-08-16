import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../main';
import CartWidget from './CartWidget';

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const querySnapshot = await getDocs(collection(db, 'item'));
      const categories = querySnapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        if (data.categoryld && !acc.includes(data.categoryld)) {
          acc.push(data.categoryld);
        }
        return acc;
      }, []);
      setCategories(categories);
    };
    
    getCategories();
  }, []);

  return (
    <nav>
      <img src="/logo.png" alt="Logo" />
      <Link to="/">Inicio</Link>
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category}`}>
          {category}
        </Link>
      ))}
      <Link to="/checkout">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;










