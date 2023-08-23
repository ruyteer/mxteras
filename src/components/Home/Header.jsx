import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const handleClick = buttons => {
    buttons.forEach(button => button.classList.remove('active'));
    this.buttons.classList.add('active');
  };
  return (
    <>
      <header>
        <h1 className='logo'>Teste</h1>
        <nav>
          <ul>
            <li>
              <Link to='/' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/Checkout' onClick={handleClick}>
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
