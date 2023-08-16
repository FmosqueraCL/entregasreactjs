import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import { db } from './main';
import { doc, setDoc } from 'firebase/firestore';
import productos from './productos';

function App() {
  useEffect(() => {
    const syncProductos = async () => {
      for (const producto of productos) {
        await setDoc(doc(db, 'item', producto.id.toString()), producto);
      }
    };
    syncProductos();
  }, []);
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
export default App;







