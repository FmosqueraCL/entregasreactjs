import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
  const categories = ['Vestuario', 'Accesorios', 'Decoración']; 
  return (
    <nav className="nav-wrapper"> 
      <div className="brand-logo">Logo: Placeholder</div>
      <ul className="right hide-on-med-and-down"> 
        {categories.map(category => (
          <li key={category}>
            <a href="#">{category}</a> 
          </li>
        ))}
        <li><CartWidget/></li>
      </ul>
    </nav>
  );
}
export default Navbar;
