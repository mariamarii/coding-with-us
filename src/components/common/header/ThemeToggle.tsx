"use client";
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ThemeToggleProps } from '@/types/header';

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  isDarkMode, 
  handleDarkModeToggle 
}) => {
  return (
    <div className="flex items-center w-[44px] h-[44px] bg-gray-100 rounded-full justify-center">
      <ToggleGroup
        type="single"
        value={isDarkMode ? 'dark' : 'light'}
        onValueChange={handleDarkModeToggle}
        className="border border-[#D9D9D9] rounded-full overflow-hidden w-[24px] h-[24px] flex items-center justify-center"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light mode"
          className="data-[state=on]:bg-[#76B729] data-[state=on]:text-white p-2"
        >
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Dark mode"
          className="data-[state=on]:bg-[#76B729] data-[state=on]:text-white p-2"
        >
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ThemeToggle; 