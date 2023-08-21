import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Checkout'>Checkout</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
