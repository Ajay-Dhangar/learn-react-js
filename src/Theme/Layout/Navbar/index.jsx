import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__brand">React Starter</div>
        <div className="navbar__menu">
          <ul>
            <li>
              <a href="/learn-react-js">Home</a>
            </li>
            <li>
              <a href="/learn-react-js/about">About</a>
            </li>
            <li>
              <a href="/learn-react-js/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
