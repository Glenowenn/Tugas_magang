// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from './navbar-logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        
        {/* Left Section: Logo */}
        <div>
          <img src={logo} alt="Logo" />
          <p>Copyright &copy; 2023 PT Bogadong Anugerah Indonesia</p>
        </div>

        {/* Center Section: Contact Information */}
        <div>
          <h3>Contact Us</h3>
          <p>Email : <a href="mailto:Manadong@gmail.com">Manadong@gmail.com</a></p>
          <p>Telp : <a href="tel:+628111009115">+62-811-1009-115</a></p>
          <div className="social-icons">
            <a href="https://wa.me/628111009115" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              <img src={require(`../assets/images/whatapp-new.png`)} alt="map" className="location-cursor mr-2"/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
              <img src={require(`../assets/images/facebook-new.png`)} alt="map" className="location-cursor mr-2"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <img src={require(`../assets/images/instagram-new.png`)} alt="map" className="location-cursor mr-2"/>
            </a>
          </div>
        </div>

        
        <div>
          <h3>Available On</h3>
          <ul>
            <li><a href="https://grab.com">Grab Food</a></li>
            <li><a href="https://gofood.com">GoFood</a></li>
            <li><a href="https://shopeefood.com">Shopee Food</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
