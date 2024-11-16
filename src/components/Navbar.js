// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from './navbar-logo.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar flex flex-row flex-wrap">
      <div className="navbar-logo basis-full md:basis-1/2">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links basis-full md:basis-1/2 justify-end">
        <li><a href="/">Home</a></li>
        <li><a href="#eatery">Eatery</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="/aboutUs">About Us</a></li>
        

        
      </ul>
    </nav>
  );
};


export default Navbar;


