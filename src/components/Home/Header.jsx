import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * CustomLink component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.to - The path the link should navigate to.
 * @param {ReactNode} props.children - The content of the link.
 *
 * @returns {JSX.Element} The CustomLink component.
 */
function CustomLink({ to, children }) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === to);
  }, [location, to]);

  return (
    <Link to={to} className={isActive ? 'link-active' : ''}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

/**
 * Render the header component
 * @returns {JSX.Element} The header component
 */
function Header() {
  const handleClick = buttons => {
    buttons.forEach(button => button.classList.remove('active'));
    this.buttons.classList.add('active');
  };
  return (
    <>
      <header>
        {/* Top section */}
        <section className='uptop'>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        </section>

        {/* Bottom section */}
        <section className='downtop'>
          {/* Logo */}
          <section className='logo'>
            <h1 className='logo'>Teste</h1>
          </section>

          {/* Navigation */}
          <section className='navigation'>
            {/* Search bar */}
            <section className='searchBar'>
              <input type='text' placeholder='Search...' />
            </section>

            {/* Nav links */}
            <nav>
              <ul>
                <li>
                  {/* Home link */}
                  <CustomLink to='/'>Home</CustomLink>
                </li>
                <li>
                  {/* Checkout link */}
                  <CustomLink to='/Checkout'>Checkout</CustomLink>
                </li>
              </ul>
            </nav>
          </section>

          {/* Other sections */}
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
