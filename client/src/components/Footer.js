import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-container">
        <div id="footer-about">
          <h2 id="about-heading">About Us</h2>
          <p id="about-description">
            We are dedicated to providing an efficient and user-friendly parking management system that simplifies the parking experience for users. Our project aims to streamline parking operations, making it easier for drivers to find available spaces and manage their bookings seamlessly.
          </p>
        </div>
        <div id="footer-contact">
          <h2 id="contact-heading">Contact Us</h2>
          <p id="contact-email">Email: <a href="mailto:support@myapp.com">rachitwalia@myapp.com</a></p>
          <p id="contact-phone">Phone: <a href="tel:+1234567890">+91 1234567890</a></p>
        </div>
        <div id="footer-social">
          <h2 id="social-heading">Follow Us</h2>
          <p id="social-links">
            <a href="https://facebook.com" id="facebook-link" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://twitter.com" id="twitter-link" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://instagram.com" id="instagram-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
      <div id="footer-bottom">
        <p id="footer-rights">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
