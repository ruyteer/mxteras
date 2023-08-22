import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <section className='uptop'>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        </section>
        <section className='downtop'>
          <section className='logo'>
            <h1 className='logo'>Teste</h1>
          </section>
          <section className='navigation'>
            <section className='searchBar'>
              <input type='text' placeholder='Search...' />
            </section>
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
          </section>
          <section className='others'>
            <h1>other1</h1>
            <h1>other2</h1>
          </section>
        </section>
      </header>
    </>
  );
}

export default Header;
