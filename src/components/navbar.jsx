import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  const categories = ['Vestuario', 'Accesorios', 'Decoración'];
  return (
    <nav className="nav-wrapper">
      <Link to="/" className="brand-logo">
        Logo: Placeholder
      </Link>
      <ul className="NavList">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;


