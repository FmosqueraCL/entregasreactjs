import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <i className="material-icons">shopping_cart</i>
      <span className="cart-number">({cartItemCount})</span>
    </>
  );
}

export default CartWidget;





