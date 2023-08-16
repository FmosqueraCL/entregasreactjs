import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Brief from './Brief';

function Checkout() {
  const { cart, clear } = useContext(CartContext);
  const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  const handleCheckout = () => {
    // Procesar el pago. Idealmente la funcion para actualizar la coleccion de FS y restar el stock efectivamente pagado va aqui (se dejó en AddItemButton para efectos de la entrega.) una vez el pago haya quedado realizado. De esa formael primero que paga se lleva el stock.
    clear();
  };
  return (
    <div>
      <Brief />
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
      <p>Total: ${cartTotal}</p>
      <button onClick={handleCheckout}>Completar compra</button>
    </div>
  );
}

export default Checkout;

