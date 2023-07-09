import React from 'react';

function CartWidget() {
  return (
    <div>
      <span className="cart-icon">
        <i className="material-icons">shopping_cart</i>
        <span className="cart-number">99+</span>
      </span>
    </div>
  );
}

export default CartWidget;
