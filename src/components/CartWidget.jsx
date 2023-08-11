import React from 'react';

function CartWidget({ cartItemCount, onShowCart }) {
  return (
    <div>
      <span className="cart-icon" onClick={onShowCart}>
        <i className="material-icons">shopping_cart</i>
        <span className="cart-number">{cartItemCount}</span>
      </span>
    </div>
  );
}

export default CartWidget;


