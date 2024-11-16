// src/components/OrderNow.js
import React from 'react';
import './OrderNow.css';
import { Link } from 'react-router-dom';

function OrderNow() {
  return (
    <div className="order-now">
      {/* Back Button and Breadcrumb */}
      <div className="order-now__breadcrumb">
        <Link to="/" className="order-now__back">← Back</Link>
        <span>Home / Order Now</span>
      </div>

      {/* Main Heading */}
      <h2 className="order-now__title">Order Now On :</h2>

      {/* Ordering Options */}
      <div className="order-now__options">
        <div className="order-now__option">
          <img
            src={require(`../assets/images/GrabFood.png`)}
            alt="GrabFood"
            className="order-now__logo"
          />
          <Link to="/ordernow/outlet" className="order-now__button">Order Now</Link> {/* Updated path */}
        </div>
        <div className="order-now__option">
          <img
            src={require(`../assets/images/gogo.png`)}
            alt="GoFood"
            className="order-now__logo"
          />
          <Link to="/ordernow/gofood" className="order-now__button">Order Now</Link> {/* Updated path */}
        </div>
        <div className="order-now__option">
          <img
            src={require(`../assets/images/Shopeefood.png`)}
            alt="Shopee Food"
            className="order-now__logo"
          />
            <Link to="/ordernow/shopeefood" className="order-now__button">Order Now</Link> 
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
