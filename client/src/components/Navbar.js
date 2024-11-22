import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-container">
        <div id="navbar-logo">
          <img 
            src="https://cdn.dribbble.com/users/718428/screenshots/3136901/wheels.gif" 
            alt="Animated Car Logo" 
            id="logo-image" 
          />
          <h1>MyApp</h1>
        </div>
        <ul id="navbar-menu">
          <li id="navbar-item">
            <Link to="/booking">Booking</Link>
          </li>
          <li id="navbar-item">
            <Link to="/parking">Parking</Link>
          </li>
          <li id="navbar-item">
            <Link to="/charging">Charging</Link>
          </li>
          <li id="navbar-item">
            <Link to="/wallet-nav">Wallet</Link>
          </li>
          <li id="navbar-item">
            <Link to="/signup">Login/Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
