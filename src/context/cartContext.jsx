import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity,
        },
      ]);
    }
  };
  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  const clear = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

