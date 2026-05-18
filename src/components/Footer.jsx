import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Eve Global</h3>
          <p>Premium advertising & branding solutions.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p>+234 803 675 0346</p>
          <p>+234 803 675 0346</p>
          <p>+234 806 880 6887</p>
          <p>princessevelyn78@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EVE GLOBAL
      </div>
    </footer>
  );
};
