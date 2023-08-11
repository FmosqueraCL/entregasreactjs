import React from 'react';
import Brief from './Brief';

function Checkout({ items, total, onRemoveFromCart, onCheckout }) {
  return (
    <div>
      <h1>Checkout</h1>
      <Brief items={items} total={total} onRemoveFromCart={onRemoveFromCart} />
      <form>
        <h2>Información de envío</h2>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" name="address" />
        </label>
        <br />
        <label>
          Ciudad:
          <input type="text" name="city" />
        </label>
        <br />
        <label>
          Código postal:
          <input type="text" name="zip" />
        </label>
        <br />
        <h2>Información de pago</h2>
        <label>
          Número de tarjeta:
          <input type="text" name="cardnumber" />
        </label>
        <br />
        <label>
          Fecha de vencimiento:
          <input type="text" name="expdate" />
        </label>
        <br />
        <label>
          Código de seguridad:
          <input type="text" name="cvv" />
        </label>
      </form>
      <button onClick={onCheckout}>Pasar a pagar</button>
    </div>
  );
}

export default Checkout;
