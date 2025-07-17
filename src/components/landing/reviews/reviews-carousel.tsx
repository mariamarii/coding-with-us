'use client';

import React, { forwardRef } from 'react';
import { ReviewsCarouselProps } from '@/types/reviews';
import { ReviewCard } from './review-card';

export const ReviewsCarousel = forwardRef<HTMLDivElement, ReviewsCarouselProps>(({
  reviews,
  currentIndex,
  isTransitioning,
  onCardClick,
}, ref) => {
  return (
    <div
      ref={ref}
      className="flex space-x-5 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          isTransitioning={isTransitioning}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
});

ReviewsCarousel.displayName = 'ReviewsCarousel'; 