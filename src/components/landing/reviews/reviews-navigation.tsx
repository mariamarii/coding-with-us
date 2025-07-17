'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewsNavigationProps } from '@/types/reviews';

export function ReviewsNavigation({
  canGoPrevious,
  canGoNext,
  isTransitioning,
  onPrevious,
  onNext,
}: ReviewsNavigationProps) {
  return (
    <div className="flex gap-2 self-end">
      <Button
        variant="outline"
        size="sm"
        onClick={onPrevious}
        disabled={!canGoPrevious || isTransitioning}
        className={`
          border transition-all duration-300
          ${canGoPrevious && !isTransitioning
            ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            : 'border-gray-300 text-gray-300 cursor-not-allowed'}
        `}
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={!canGoNext || isTransitioning}
        className={`
          border transition-all duration-300
          ${canGoNext && !isTransitioning
            ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            : 'border-gray-300 text-gray-300 cursor-not-allowed'}
        `}
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
} 