"use client";
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { LanguageToggleProps } from '@/types/header';

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  selectedLanguage, 
  handleLanguageChange 
}) => {
  return (
    <ToggleGroup
      type="single"
      value={selectedLanguage}
      onValueChange={handleLanguageChange}
      className="border border-[#D9D9D9] rounded-lg w-[75px] h-[39px] flex overflow-hidden"
    >
      <ToggleGroupItem
        value="en"
        aria-label="English"
        className="w-1/2 h-full data-[state=on]:bg-[#76B729] text-[#75757E] data-[state=on]:text-white text-[16px] font-[400] flex items-center justify-center"
      >
        En
      </ToggleGroupItem>
      <ToggleGroupItem
        value="ar"
        aria-label="Arabic"
        className="w-1/2 h-full data-[state=on]:bg-[#76B729] text-[#75757E] data-[state=on]:text-white text-[16px] font-[400] flex items-center justify-center"
      >
        AR
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default LanguageToggle;