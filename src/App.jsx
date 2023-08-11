import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import productos from './Productos';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.quantity * item.precio,0);
  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);
  const handleAddToCart = (producto) => {
    const existingItem = cart.find((item) => item.id === producto.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...producto,
          quantity: 1,
          nombre: producto.nombre,
          precio: producto.precio,
        },
      ]);
    }
  };
  const handleRemoveFromCart = (producto) => {
    const existingItem = cart.find((item) => item.id === producto.id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== producto.id));
    }
  };
  
  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItemCount} onShowCart={handleShowCart} />
        {showCart && (
          <div>
            <Checkout items={cart} total={cartTotal} onRemoveFromCart={handleRemoveFromCart}/>
            <button onClick={handleHideCart}>Cerrar carrito</button>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer productos={productos} onAddToCart={handleAddToCart}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






