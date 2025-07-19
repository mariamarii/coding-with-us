import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({ onPrev, onNext }) => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hover:bg-white/80 bg-white rounded-full w-10 h-10 shadow-md"
        onClick={onPrev}
      >
        <ChevronLeft className="w-5 h-5 text-[#292D32]" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:bg-white/80 bg-white rounded-full w-10 h-10 shadow-md"
        onClick={onNext}
      >
        <ChevronRight className="w-5 h-5 text-[#292D32]" />
      </Button>
    </>
  );
};

export default NavigationArrows; 