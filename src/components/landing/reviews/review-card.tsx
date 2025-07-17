'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ReviewCardProps } from '@/types/reviews';

export function ReviewCard({ review, isTransitioning, onClick }: ReviewCardProps) {
  const handleClick = () => {
    onClick(review);
  };

  return (
    <Card
      data-review-card
      onClick={handleClick}
      className={`
        min-w-[350px] sm:min-w-[350px] lg:min-w-[400px] max-w-[450px] cursor-pointer
        bg-white border border-gray-300 shadow-sm rounded-md
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:-translate-y-1
        '}
      `}
    >
      <CardContent className="p-6 flex flex-col min-h-[360px]">
        <div className="aksara-text text-4xl sm:text-5xl font-normal italic text-black h-[10%] leading-none">
          ''
        </div>

        <div className="flex-1 text-lg sm:text-xl text-black leading-tight border-b border-gray-300 pb-4 mb-4">
          <div className="line-clamp-6">
            {review.content}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
              src="/person.png"
              alt="Avatar icon"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg sm:text-xl text-black leading-tight">
              {review.name}
            </h4>
            <p className="font-normal italic text-lg sm:text-xl text-gray-500 leading-tight">
              {review.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 