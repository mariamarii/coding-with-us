import { useState } from 'react';

interface UseCarouselProps {
  totalItems: number;
  initialIndex?: number;
}

export const useCarousel = ({ totalItems, initialIndex = 0 }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => {
    setCurrentIndex((prev) => 
      prev === totalItems - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? totalItems - 1 : prev - 1
    );
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    next,
    prev,
    goTo,
  };
}; 