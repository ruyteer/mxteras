import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";

function CustomLink({ to, children }) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === to);
  }, [location, to]);

  return (
    <Link to={to} className={isActive ? "link-active" : ""}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Header() {
  return (
    <>
      <header>
        <section className="uptop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            fill="white"
            viewBox="0 0 512 264"
            style={{
              marginBottom: "6px",
              marginRight: "12px",
            }}
            width="18"
            height="37"
          >
            <g>
              <path d="M490.727,21.379C473.083,3.489,447.355-3.846,422.93,2.051L96.786,70.595C34.85,79.76-7.929,137.399,1.236,199.334   c3.563,24.079,14.782,46.372,31.997,63.581l34.965,34.987c1.637,1.615,2.552,3.823,2.539,6.123v64.512   c0.047,40.134,32.57,72.657,72.704,72.704h64.512c2.303,0,4.513,0.913,6.144,2.539l34.965,34.965   c21.142,21.282,49.895,33.259,79.893,33.28c12.383-0.01,24.683-2.035,36.416-5.995c40.491-13.447,69.914-48.61,76.011-90.837   l68.544-325.12C516.084,65.391,508.789,39.291,490.727,21.379z M66.599,167c5.798-17.913,21.444-30.848,40.128-33.173   c0.754-0.1,1.5-0.228,2.24-0.384L393.17,73.71L134.738,331.992v-27.968c0.047-19.294-7.637-37.803-21.333-51.392l-34.923-34.965   C65.031,204.511,60.399,184.765,66.599,167z M378.535,403.118c-0.171,0.747-0.277,1.493-0.384,2.24   c-3.705,27.023-28.614,45.926-55.637,42.221c-10.676-1.464-20.581-6.379-28.203-13.997l-34.944-34.944   c-13.596-13.7-32.112-21.383-51.413-21.333h-27.968l258.368-258.432L378.535,403.118z"></path>
            </g>
          </svg>
          <h1>
            TERAS NO GDMO E LDMO | ENTREGA DAS 12:00 ÁS 00:00 NA HORA | CONTAS
            NO DMO
          </h1>
        </section>

        {/* Bottom section */}
        <section className="downtop">
          {/* Logo */}
          <section className="logo">
            <img
              src={logo}
              alt=""
              style={{
                width: 300,
                height: 90,
                textAlign: "center",
              }}
            />
          </section>

          {/* Search bar */}
          <section className="searchBar">
            <div className="search">
              <input type="text" placeholder="O que está buscando?" />
              <button>
                <svg
                  class="icon icon--search"
                  viewBox="0 0 21 21"
                  role="presentation"
                >
                  <g
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path d="M19 19l-5-5" stroke-linecap="square"></path>
                    <circle cx="8.5" cy="8.5" r="7.5"></circle>
                  </g>
                </svg>
              </button>
            </div>
            <section className="others">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 36 24"
                width="37"
                fill="white"
              >
                <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"></path>
                <circle cx="7" cy="22" r="2"></circle>
                <circle cx="17" cy="22" r="2"></circle>
              </svg>
              <a>Carrinho</a>
            </section>
          </section>
        </section>
        <section className="navigation">
          {/* Nav links */}
          <nav>
            <ul>
              <li>
                <CustomLink to="/">Início</CustomLink>
              </li>
              <li>
                <CustomLink to="/">Contas</CustomLink>
              </li>
              <li>
                <CustomLink to="/">Entrar em contato</CustomLink>
              </li>
              <li>
                <CustomLink to="/">Teras LDMO</CustomLink>
              </li>
              <li>
                <CustomLink to="/">Teras GDMO</CustomLink>
              </li>
              <li>
                {/* Checkout link */}
                <CustomLink to="/checkout">Checkout</CustomLink>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
