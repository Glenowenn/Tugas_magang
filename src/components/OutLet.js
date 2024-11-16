// src/components/OutLet.js
import React from 'react';
import { Link } from 'react-router-dom';
import './OutLet.css';
import foodImage from '../assets/images/image 14.png'; 


const OutLet = () => {
  return (
    <div className="outlet">
      {/* Back Button and Breadcrumb */}
      <div className="outlet__breadcrumb">
        <Link to="/ordernow" className="outlet__back">← Back</Link>
        <span>Home / Order Now / GrabFood Outlet</span>
      </div>

      {/* Main Heading */}
      <h2 className="outlet__title">GrabFood Outlet</h2>

      {/* Outlet List and Image */}
      <div className="outlet__content">
        <div className="outlet__list">
          <ul>
            <li>Senopati, Petogogan <Link to="#">Purchase Here →</Link></li>
            <li>Kebun Jeruk / Tanjung Duren <Link to="#">Purchase Here →</Link></li>
            <li>Food Plaza PIK <Link to="#">Purchase Here →</Link></li>
            <li>Kuningan - D'Kanteen <Link to="#">Purchase Here →</Link></li>
            <li>Bintaro, Thelapan Square <Link to="#">Purchase Here →</Link></li>
            <li>Gading Serpong <Link to="#">Purchase Here →</Link></li>
            <li>Cipete <Link to="#">Purchase Here →</Link></li>
            <li>Menteng <Link to="#">Purchase Here →</Link></li>
          </ul>
        </div>
        <div className="outlet__image">
          <img src={foodImage} alt="GrabFood Outlet Dishes" />
        </div>
      </div>
    </div>
  );
};

export default OutLet;
