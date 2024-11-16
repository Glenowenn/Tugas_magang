// src/components/PromoSection.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './PromoSection.css';
import foodImage from '../assets/images/image 14.png'; // Adjust the path based on your folder structure

const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-text">
        <h2>Manadong</h2>
        <p>is a Manado dish with a spicy and appetizing flavour.</p>
        <p className="hashtag">#NikmatnyaGaPakeRibet</p>
        <Link to="/ordernow" className="order-button"><b>Order Now</b></Link>
      </div>
      <div className="promo-image">
        <img src={foodImage} alt="Manado dish" />
      </div>
    </div>
  );
};

export default PromoSection;
