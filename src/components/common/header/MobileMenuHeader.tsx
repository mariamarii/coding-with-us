"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { MobileMenuHeaderProps } from '@/types/header';

const MobileMenuHeader: React.FC<MobileMenuHeaderProps> = ({ 
  isDarkMode, 
  setMobileMenuOpen 
}) => {
  return (
    <div className="flex justify-end p-4 border-b">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenuOpen(false)}
        className="w-8 h-8 text-black hover:bg-gray-100"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </Button>
    </div>
  );
};

export default MobileMenuHeader; 