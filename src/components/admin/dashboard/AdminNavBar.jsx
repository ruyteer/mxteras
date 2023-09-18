import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function AdminNavBar() {
  return (
    <div className="admin-nav">
      <h1>Admin Dashboard</h1>

      <ul>
        <li>
          <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11.492 4.067l5 2.857A2 2 0 0117.5 8.661v4.678a2 2 0 01-1.008 1.737l-5 2.857a2 2 0 01-1.984 0l-5-2.857A2 2 0 013.5 13.339V8.661a2 2 0 011.008-1.737l5-2.857a2 2 0 011.984 0zM14 9.5l-7-4" />
              <path d="M4 8l5.552 2.99a2 2 0 001.896 0L17 8M10.5 11.5V18" />
            </g>
          </svg>
          <Link to={"/admin/dashboard/orders"}>Compras</Link>
        </li>
        <li>
          <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(3 3)"
            >
              <path d="M9.5 5.5 A2 2 0 0 1 7.5 7.5 A2 2 0 0 1 5.5 5.5 A2 2 0 0 1 9.5 5.5 z" />
              <path d="M.5 3.5h1v-1a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1h-1M.5 7.5h1M.5 5.5h1M.5 9.5h1" />
              <path d="M10.5 10.5v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2v1a1 1 0 001 1h4a1 1 0 001-1z" />
            </g>
          </svg>
          <Link to={"/admin/dashboard/clients"}>Clientes</Link>
        </li>
        <li>
          <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
            <g fill="none" fillRule="evenodd">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 6.5h12.5l-1.586 5.55a2 2 0 01-1.923 1.45h-6.7a2 2 0 01-1.989-1.78L4.5 4.5h-2"
              />
              <g fill="currentColor" transform="translate(2 4)">
                <path d="M6 12 A1 1 0 0 1 5 13 A1 1 0 0 1 4 12 A1 1 0 0 1 6 12 z" />
                <path d="M14 12 A1 1 0 0 1 13 13 A1 1 0 0 1 12 12 A1 1 0 0 1 14 12 z" />
              </g>
            </g>
          </svg>
          <Link to={"/admin/dashboard/products"}>Produtos</Link>
        </li>
        <li>
          <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2.486V2.5a2 2 0 104 0l-.001-.015H14.5a1 1 0 011 1V16.5a1 1 0 01-1 1H12a2 2 0 10-4 0H5.5a1 1 0 01-1-1V3.485a1 1 0 011-1zM6.5 6.5h1M9.5 6.5h1M12.5 6.5h1M6.5 13.5h1M9.5 13.5h1M12.5 13.5h1" />
            </g>
          </svg>
          <Link to={"/admin/dashboard/coupons"}>Cupons</Link>
        </li>
        <li>
          <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2.486V2.5a2 2 0 104 0l-.001-.015H14.5a1 1 0 011 1V16.5a1 1 0 01-1 1H12a2 2 0 10-4 0H5.5a1 1 0 01-1-1V3.485a1 1 0 011-1zM6.5 6.5h1M9.5 6.5h1M12.5 6.5h1M6.5 13.5h1M9.5 13.5h1M12.5 13.5h1" />
            </g>
          </svg>
          <Link to={"/admin/dashboard/banners"}>Banners</Link>
        </li>
      </ul>

      <a>Sign out</a>
    </div>
  );
}

export default AdminNavBar;
