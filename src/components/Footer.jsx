// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>&copy; {new Date().getFullYear()} HotelBooking. All rights reserved.</p>
        </div>
        <div className="footer__right">
          <a href="/about" className="footer__link">About Us</a>
          <a href="/contact" className="footer__link">Contact</a>
          <a href="/privacy" className="footer__link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
