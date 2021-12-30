import React from "react";
import "../sass/styles.scss";

const Navbar = () => {
  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://preview.uideck.com/items/appvilla/assets/images/logo/white-logo.svg"
          alt="logo"
        ></img>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          {" "}
          <button>GET IT NOW</button>
        </a>
      </header>
    </div>
  );
};

export default Navbar;
