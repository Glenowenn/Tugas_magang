import React from 'react';
import PromotionCard from './PromotionCard'; // Komponen untuk kartu promosi
import './PromotionSection.css';

const promotions = [
  {
    id: 1,
    title: 'Buy 2 Get 1',
    description: 'Buy 2 and get 1 free, applicable to select variants.',
    type: 'buy-2-get-1',
    Image: 'Buy2 get 1.jpg',
  },
  {
    id: 2,
    title: 'Discount 20%',
    description: 'Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50,000.',
    type: 'discount',
    Image: 'Discount20.png',
  },
  {
    id: 3,
    title: 'Bundle Deal',
    description: 'Purchase Ayam Woku and Ayam Rica to save 30% on the total cost.',
    type: 'bundle-deal',
    Image:'Bundle Deal.png',
  },
];

const PromotionSection = () => {
  return (
    <div className="promotion-section grid-container">
     <div className='promotion-text'>  
      <h2>
        <span className="promotion-underline">Promotion</span>
     </h2>
     </div>

      <div className="promotion-grid">
        {promotions.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            title={promotion.title}
            description={promotion.description}
            type={promotion.type}
            img={promotion.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionSection;
