import React, { useRef, useState } from 'react';
import './ReviewSection.css';
const reviews = [
  { id: 1, name: 'John', review: 'Buy 2 and get 1 free, applicable to select variants.' },
  { id: 2, name: 'Glen', review: 'Buy 2 and get 1 free, applicable to select variants.' },
  { id: 3, name: 'Owen', review: 'Buy 2 and get 1 free, applicable to select variants.' },
  { id: 4, name: 'People', review: 'Buy 2 and get 1 free, applicable to select variants.' },
  
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToItem = (index) => {
    const itemWidth = carouselRef.current.children[0].offsetWidth + 24; // Card width + gap
    carouselRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  return (
    <div className="bg-blue-100 py-20 px-20">
      <div className="mb-8">
        <p className="text-lg font-bold review-title" style={{ color: '#004080', textAlign: 'left' }}>
          Reviews
        </p>
      </div>
      <div ref={carouselRef} className="carousel flex gap-6 overflow-x-auto px-5">
        {reviews.map((item) => (
          <div key={item.id} className="carousel-item bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-80 flex-shrink-0">
            <div className="text-2xl text-orange-400">“</div>
            <div className="mb-4">
              <p className="font-semibold text-blue-900">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.review}</p>
            </div>
            <div className="text-2xl text-orange-400 text-right">”</div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-4 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToItem(index)}
            className={`p-1 rounded-full w-2 h-2 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-label={`Go to item ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
