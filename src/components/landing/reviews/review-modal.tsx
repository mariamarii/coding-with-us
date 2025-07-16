'use client';

import React from 'react';
import { X } from 'lucide-react';
import { ReviewModalProps } from '@/types/reviews';

export function ReviewModal({ review, isOpen, onClose }: ReviewModalProps) {
  if (!isOpen || !review) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-[90%] max-w-2xl p-6 rounded-lg shadow-xl relative"
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-4 text-black">
          <h3 className="text-xl sm:text-2xl font-bold">{review.name}</h3>
          <p className="italic text-gray-600">{review.role}</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          {review.content}
        </p>
      </div>
    </div>
  );
} 