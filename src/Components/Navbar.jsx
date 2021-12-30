import React from "react";
import "../sass/styles.scss";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img src="https://preview.uideck.com/items/appvilla/assets/images/logo/white-logo.svg" />
          </li>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
