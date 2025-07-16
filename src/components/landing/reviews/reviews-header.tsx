'use client';

import React from 'react';
import { ReviewsHeaderProps } from '@/types/reviews';
import { ReviewsNavigation } from './reviews-navigation';

export function ReviewsHeader({
  canGoPrevious,
  canGoNext,
  isTransitioning,
  onPrevious,
  onNext,
}: ReviewsHeaderProps) {
  return (
    <>
      <div className="mb-2">
        <h3 className="text-2xl sm:text-3xl font-normal text-[#868686] leading-tight">
          The reviews are in
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-[#1A1A1A] leading-tight">
          What Learners are saying
        </h2>

        <ReviewsNavigation
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          isTransitioning={isTransitioning}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
} 