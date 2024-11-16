// src/components/MenuSection.js
import React from 'react';
import MenuItem from './MenuItem';
import './MenuSection.css';
import Component from './Component';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, image: 'image 16.png', name: 'Ayam Rica',description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000', isNew: true, variant: 'normal' },
  { id: 2, image: 'Cumi Hitam.png', name: 'Cumi Hitam', description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000',isNew: false, variant: 'normal' },
  { id: 3, image: 'Cakalang Tinorasak.png', name: 'Cakalang Tinorasak',description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000',isNew: false, variant: 'normal' },
  { id: 4, image: 'perkedel jagung.png', name: 'Perkedel Jagung',description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000',isNew: false, variant: 'large' },
  { id: 5, image: 'Ayam Woku.png', name: 'Ayam Woku',description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000',isNew: false, variant: 'normal' },
  { id: 6, image: 'lauk frozen.png', name: 'Lauk Frozen',description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000',isNew: false, variant: 'normal' },
  { id: 7, image: 'cakalang rabe.png', name: 'Cakalang Rabe',description:'stream rice, 2 pieces of corn fritters, and squid with black sauce.',price: 'Rp.40.000',isNew: false, variant: 'normal' },
];


const MenuSection = () => {
  return (
    <div className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.id}
            image={item.image}
            name={item.name}
            isNew={item.isNew}
            variant={item.variant}
          />
        ))}
      </div>
      <div className="order-now-container">
      <Link to="/ordernow"><button className="order-now-button">Order Now</button></Link>
      </div>
      {menuItems.map((item, index) => ( 
           <Component
           key={item.id}
            img={item.image}
            name={item.name}
            isNew={item.isNew}
            variant={item.variant}
            description={item.description}
            price={item.price}
           />
        ))}
    </div>
  );
};


export default MenuSection;
