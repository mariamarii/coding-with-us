import { useState, useEffect, useRef } from 'react';
import { Review } from '@/types/reviews';

export function useReviewsCarousel(reviews: Review[]) {
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

  const maxIndex = Math.max(0, reviews.length - cardsPerView);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;



  const handlePrevious = () => {
    console.log('Previous clicked:', { canGoPrevious, isTransitioning, currentIndex });
    if (canGoPrevious && !isTransitioning) {
      setIsTransitioning(true);
      
      if (carouselRef.current) {
        console.log('Scrolling previous, current scrollLeft:', carouselRef.current.scrollLeft);
        carouselRef.current.scrollBy({
          left: -400, // Scroll left by card width
          behavior: 'smooth',
        });
      }
      
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  const handleNext = () => {
    console.log('Next clicked:', { canGoNext, isTransitioning, currentIndex });
    if (canGoNext && !isTransitioning) {
      setIsTransitioning(true);
      
      if (carouselRef.current) {
        console.log('Scrolling next, current scrollLeft:', carouselRef.current.scrollLeft);
        carouselRef.current.scrollBy({
          left: 400, // Scroll right by card width
          behavior: 'smooth',
        });
      }
      
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  return {
    currentIndex,
    isTransitioning,
    canGoPrevious,
    canGoNext,
    carouselRef,
    handlePrevious,
    handleNext,
  };
} 