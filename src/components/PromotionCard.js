import React from 'react';
import './PromotionCard.css';

const PromotionCard = ({ title, description, type, img }) => {
  return (
    <div className={`promotion-card ${type}`}>
      <div className="promotion-icon">
      <img src={require(`../assets/images/${img}`)} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PromotionCard;
