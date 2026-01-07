import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>MyPortfolio</h2>
          <p>Building modern and interactive websites with passion 🚀</p>
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: abhishehkushwaha.118@gmail.com</p>
          <p>Phone: 6367697913</p>
          <div className="footer-socials">
            <a href="#" target="_blank">🌐</a>
            <a href="#" target="_blank">🐦</a>
            <a href="#" target="_blank">💼</a>
            <a href="#" target="_blank">📸</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      </div>
    </footer>
  )
}

export default Footer;
