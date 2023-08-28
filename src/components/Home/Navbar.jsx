import React from "react";
import "./navbar.css";

/**
 * Render the navigation bar.
 * @returns {JSX.Element} The rendered navigation bar.
 */
function Navbar() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <ul>
          {/* Home */}
          <li>
            <a href="/checkout">Home</a>
          </li>
          {/* Home */}
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
