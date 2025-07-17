'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import { useReviewsCarousel } from '@/hooks/use-reviews-carousel';
import { reviewsData } from '@/data/reviews-data';
import { Review } from '@/types/reviews';
import { ReviewsHeader } from './reviews/reviews-header';
import { ReviewsCarousel } from './reviews/reviews-carousel';
import { ReviewModal } from './reviews/review-modal';

export function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    currentIndex,
    isTransitioning,
    canGoPrevious,
    canGoNext,
    carouselRef,
    handlePrevious,
    handleNext,
  } = useReviewsCarousel(reviewsData);

  const handleCardClick = (review: Review) => {
    try {
      setSelectedReview(review);
      setIsModalOpen(true);
    } catch (error) {
      toast.error('Failed to open review details');
    }
  };

  const handleCloseModal = () => {
    try {
      setIsModalOpen(false);
      setSelectedReview(null);
    } catch (error) {
      toast.error('Failed to close review details');
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 mx-auto relative">
      <div className="w-[72%] mx-auto">
        <div className="max-w-7xl mx-auto">
          <ReviewsHeader
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            isTransitioning={isTransitioning}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />

          <ReviewsCarousel
            ref={carouselRef}
            reviews={reviewsData}
            currentIndex={currentIndex}
            isTransitioning={isTransitioning}
            onCardClick={handleCardClick}
          />
        </div>
      </div>

      <ReviewModal
        review={selectedReview}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
} 