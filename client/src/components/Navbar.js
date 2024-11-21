import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>MyApp</h1>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item" id="booking">
            <Link to="/booking">Booking</Link> {/* Change to React Router Link */}
          </li>
          <li className="navbar-item" id="parking">
            <a href="#parking">Parking</a>
          </li>
          <li className="navbar-item" id="charging">
            <a href="#charging">Charging</a>
          </li>
          {/* <li className="navbar-item" id="walletPoints"><a href="#walletPoints">Wallet Points</a></li> */}
          <li className="navbar-item" id="wallet">
            <Link to="/wallet-nav">Wallet</Link> {/* Add Wallet link here */}
          </li>
          <li className="navbar-item" id="loginSignup">
            <Link to="/signup">Login/Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
