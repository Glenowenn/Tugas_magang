import React from 'react';
import './AboutUs.css'; // Import the CSS file


function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="about-us__title">About Us</h2>
      <div className="about-us__content">
        <img 
          src={require(`../assets/images/image 14.png`)}
          alt="About our company" 
          className="about-us__image"
        />
        <div className="about-us__text">
          <h3 className="about-us__subtitle">About our Company</h3>
          <p className="about-us__description">
            Welcome to our company! we are dedicated to providing high-quality services and products that make a difference. Our mission is to deliver exceptional value and foster lasting relationships with our clients and partners. With a passionate and skilled team, we continuously strive for excellence in everything we do.
          </p>
          <p className="about-us__description">
            From humble beginnings to becoming a leader in our industry, we take pride in our journey and our commitment to innovation, integrity, and customer satisfaction. Join us as we continue to grow and make a positive impact in the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
