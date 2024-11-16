// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css';

const MenuItem = ({key, image, name, isNew, variant }) => {
  const handleClick = () => {
    const modal = document.getElementById(`my_modal_${name}`);
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className={`menu-item ${variant}`} onClick={handleClick}>
      <img src={require(`../assets/images/${image}`)}alt={name} />
      <p>
        {name} {isNew && <span className="new">NEW</span>}
      </p>
    </div>
  );
};

export default MenuItem;
