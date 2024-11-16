// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OrderNow from './components/OrderNow';
import OutLet from './components/OutLet';
import Gofood from './components/Gofood';
import Shopeefood from './components/Shopeefood';
import PromoSection from './components/PromoSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ordernow" element={<OrderNow />} /> 
        <Route path="/ordernow/outlet" element={<OutLet />} /> 
        <Route path="/ordernow/gofood" element={<Gofood />} />
        <Route path="/ordernow/Shopeefood" element={<Shopeefood />} />
        <Route path="/ordernow/PromoSection" element={<PromoSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
