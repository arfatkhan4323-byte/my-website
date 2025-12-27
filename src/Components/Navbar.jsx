import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="img.png"
          alt="3PL Dynamics Logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/customer">Customer Login</Link></li>
       
      </ul>

      <div className="nav-right">
        <button className="demo-btn">Book a Demo</button>
      </div>

      <div className="mobile-menu-toggle">
        ☰ 
    </div>
    </nav>
  );
};

export default Navbar;