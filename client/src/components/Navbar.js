import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>MyApp</h1>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item" id="booking"><a href="#Booking">Booking</a></li>
          <li className="navbar-item" id="parking"><a href="#parking">Parking</a></li>
          <li className="navbar-item" id="charging"><a href="#charging">Charging</a></li>
          <li className="navbar-item" id="walletPoints"><a href="#walletPoints">Wallet Points</a></li>
          <li className="navbar-item" id="loginSignup"><a href="#loginSignup">Login/Signup</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;