"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollNavigationButtonsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const ScrollNavigationButtons: React.FC<ScrollNavigationButtonsProps> = ({
  canScrollLeft,
  canScrollRight,
  onScrollLeft,
  onScrollRight
}) => {
  return (
    <>
      {canScrollLeft && (
        <Card className="absolute top-1/2 -translate-y-1/2 -left-5 z-10 bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={onScrollLeft}
              className="w-10 h-10 rounded-full bg-[#C0DE9D] hover:bg-gray-50 text-gray-600 shadow-md border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {canScrollRight && (
        <Card className="absolute top-1/2 -translate-y-1/2 -right-5 z-10 bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={onScrollRight}
              className="w-10 h-10 rounded-full bg-[#C0DE9D] hover:bg-gray-50 text-gray-600 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ScrollNavigationButtons; 