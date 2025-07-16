import { useState, useEffect, useRef } from 'react';

interface UseCarouselReturn {
  currentIndex: number;
  cardsPerView: number;
  isTransitioning: boolean;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  canGoPrevious: boolean;
  canGoNext: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
  scrollToIndex: (index: number) => void;
}

export function useCarousel(totalItems: number): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    calculateCardsPerView();
    window.addEventListener('resize', calculateCardsPerView);
    return () => window.removeEventListener('resize', calculateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, totalItems - cardsPerView);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const scrollToIndex = (index: number) => {
    if (carouselRef.current && !isTransitioning) {
      setIsTransitioning(true);
      const cardWidth = carouselRef.current.scrollWidth / totalItems;
      
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      
      setCurrentIndex(index);
      
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious && !isTransitioning) {
      const newIndex = currentIndex - 1;
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (canGoNext && !isTransitioning) {
      const newIndex = currentIndex + 1;
      scrollToIndex(newIndex);
    }
  };

  return {
    currentIndex,
    cardsPerView,
    isTransitioning,
    carouselRef,
    canGoPrevious,
    canGoNext,
    handlePrevious,
    handleNext,
    scrollToIndex,
  };
} 