import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-container">
        <div id="footer-about">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing an efficient and user-friendly parking management system that simplifies the parking experience for users. Our project aims to streamline parking operations, making it easier for drivers to find available spaces and manage their bookings seamlessly.
          </p>
        </div>
        <div id="footer-contact">
          <h2>Contact Us</h2>
          <p>Email: support@myapp.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div id="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;