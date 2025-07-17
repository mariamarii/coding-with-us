'use client';

import React, { useState } from 'react';

interface CarouselDotProps {
  isActive: boolean;
  onClick: () => void;
}

const CarouselDot: React.FC<CarouselDotProps> = ({ isActive, onClick }) => (
  <div
    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
      isActive 
        ? 'bg-[#76B729] hover:bg-[#6BA524]' 
        : 'bg-white/50 hover:bg-white/80'
    }`}
    onClick={onClick}
  />
);

export function LandingSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-[600px] max-h-[617px] h-[70vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden lg:h-[75vh] lg:max-h-[700px] md:h-[65vh] md:min-h-[500px] sm:h-[60vh] sm:min-h-[450px] xs:h-[55vh] xs:min-h-[400px]" 
         style={{ backgroundImage: "url('/landing-image.png')" }}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/50 dark:from-black/70 dark:to-black/70 z-10" />
      
      <div className="relative z-20 flex items-center h-full max-w-[72%] mx-auto w-full">
        <div className="flex-1 max-w-[800px] text-white  lg:max-w-[700px] md:max-w-full">
          
          <h1 className="font-inter font-bold text-5xl leading-none tracking-normal mb-6 drop-shadow-lg lg:text-[56px] xl:text-[56px] md:text-4xl md:mb-5 sm:text-3xl sm:mb-4 xs:text-[28px] xs:mb-3 xs:leading-tight">
            <span className="text-[#C5FE81]">Self Education</span>
            <br />
            <span className="text-white">Resources and info</span>
          </h1>
          
          <p className="font-inter font-bold text-base leading-none tracking-normal text-white mb-12 opacity-95 max-w-[600px] drop-shadow-md lg:text-lg xl:text-lg md:text-sm md:mb-10 sm:text-sm sm:mb-8 sm:max-w-full xs:text-xs xs:mb-6 xs:leading-tight xs:max-w-full">
            Technology is bringing a massive wave of evolution on learning things on different ways
          </p>

          
        </div>
      </div>

      <div className="absolute bottom-16 left-[14%] flex gap-2 z-30 sm:bottom-12 xs:bottom-8 xs:gap-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <CarouselDot
            key={index}
            isActive={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}