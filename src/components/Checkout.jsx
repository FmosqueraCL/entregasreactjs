import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Brief from './Brief';

function Checkout() {
  const { cart, clear } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expDateError, setExpDateError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };
  const handleRepeatEmailChange = (event) => {
    setRepeatEmail(event.target.value);
    setEmailError(false);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(false);
  };
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    setCardNumberError(false);
  };
  const handleExpDateChange = (event) => {
    setExpDate(event.target.value);
    setExpDateError(false);
  };
  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    setCvvError(false);
  };
  const validateEmail = () => {
    if (email !== repeatEmail) {
      setEmailError(true);
      return false;
    }
    return true;
  };

  const validatePhone = () => {
    if (!/^\d{9}$/.test(phone)) {
      setPhoneError(true);
      return false;
    }
    return true;
  };
  const validateCardNumber = () => {
    if (!/^\d{16}$/.test(cardNumber)) {
      setCardNumberError(true);
      return false;
    }
    return true;
  };
  const validateExpDate = () => {
    if (!/^\d{2}\/\d{2}$/.test(expDate)) {
      setExpDateError(true);
      return false;
    }
    return true;
  };
  const validateCvv = () => {
    if (!/^\d{3}$/.test(cvv)) {
      setCvvError(true);
      return false;
    }
    return true;
  };
  const handleCheckout = () => {
    if (
      validateEmail() &&
      validatePhone() &&
      validateCardNumber() &&
      validateExpDate() &&
      validateCvv()
    ) {
      // Procesar el pago. 
      clear();
    }
  };
  if (cart.length === 0) {
    return <p>Agrega productos al carro</p>;
  }
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
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        {emailError && <p style={{ color: 'red' }}>Los emails no coinciden.</p>}
        <br />
        <label>
          Repetir email:
          <input
            type="email"
            name="repeatEmail"
            value={repeatEmail}
            onChange={handleRepeatEmailChange}
          />
        </label>
        {emailError && <p style={{ color: 'red' }}>Los emails no coinciden.</p>}
        <br />
        <label>
          Teléfono:
          <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} />
        </label>
        {phoneError && (
          <p style={{ color: 'red' }}>El número de teléfono debe tener exactamente 9 dígitos.</p>
        )}
        <br />
        <h2>Información de pago</h2>
        <label>
          Número de tarjeta:
          <input
            type="text"
            name="cardnumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </label>
        {cardNumberError && (
          <p style={{ color: 'red' }}>El número de tarjeta debe tener exactamente 16 dígitos.</p>
        )}
        <br />
        <label>
          Fecha de vencimiento:
          <input type="text" name="expdate" value={expDate} onChange={handleExpDateChange} />
        </label>
        {expDateError && (
          <p style={{ color: 'red' }}>La fecha de vencimiento debe tener el formato MM/AA.</p>
        )}
        <br />
        <label>
          Código de seguridad:
          <input type="text" name="cvv" value={cvv} onChange={handleCvvChange} />
        </label>
        {cvvError && (
          <p style={{ color: 'red' }}>El código de seguridad debe tener exactamente 3 dígitos.</p>
        )}
      </form>
      <p>Total: ${cartTotal}</p>
      <button onClick={handleCheckout}>Completar compra</button>
    </div>
  );
}

export default Checkout;


