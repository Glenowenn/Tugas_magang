// src/App.js
import React from 'react';
import PromoSection from './PromoSection';
import MenuSection from './MenuSection';
import PromotionSection from './PromotionSection';
import ReviewSection from './ReviewSection';
import Locations from './Locations';




function Home() {
  return (
    <div className="App">
      <PromoSection />
      <MenuSection />
      <PromotionSection />
      <ReviewSection/>
      <Locations/>
      {/* Other components */}
    </div>
  );
}




export default Home;

