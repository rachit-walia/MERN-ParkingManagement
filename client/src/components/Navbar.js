import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">My Website</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        {/* Replace <a> with <button> for better accessibility */}
        <button className="nav-link" onClick={() => window.location.href = '/'}>
          Home
        </button>
        <button className="nav-link" onClick={() => window.location.href = '/about'}>
          About
        </button>
        <button className="nav-link" onClick={() => window.location.href = '/services'}>
          Services
        </button>
        <button className="nav-link" onClick={() => window.location.href = '/contact'}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
