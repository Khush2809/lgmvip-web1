import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="d-flex justify-content-between flex-row"
        style={{ backgroundColor: "#171717", padding: "2%" }}
      >
        <div className="d-flex">
          <img
            src="https://preview.uideck.com/items/appvilla/assets/images/logo/white-logo.svg"
            style={{ height: "30px" }}
          ></img>
        </div>
        <div>
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="d-flex ">
          <i className="footer-icon">
            <FaInstagramSquare />
          </i>
          <i className="footer-icon">
            <FaFacebookSquare />
          </i>
          <i className="footer-icon">
            <FaTwitterSquare />
          </i>
          <i className="footer-icon">
            <FaYoutubeSquare />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
