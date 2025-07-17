"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Moon, Sun } from 'lucide-react';

const DesktopControls: React.FC<{
  isDarkMode: boolean;
  selectedLanguage: 'en' | 'ar';
  handleLanguageChange: (language: 'en' | 'ar') => void;
  handleDarkModeToggle: (value: string) => void;
}> = ({ isDarkMode, selectedLanguage, handleLanguageChange, handleDarkModeToggle }) => (
  <div className="hidden xl:flex items-center gap-4">
    <Button
      variant="ghost"
      size="icon"
      className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full"
    >
      <Image
        src="/cart.svg"
        alt="Cart"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </Button>

    


    {/* Language Toggle Group */}
    <ToggleGroup
  type="single"
  value={selectedLanguage}
  onValueChange={handleLanguageChange}
  className="border border-[#D9D9D9] rounded-lg w-[75px] h-[39px] flex overflow-hidden"
>
  <ToggleGroupItem
    value="en"
    aria-label="English"
    className="w-1/2 h-full data-[state=on]:bg-[#76B729] dark:text-white data-[state=on]:text-white text-sm font-medium flex items-center justify-center"
  >
    En
  </ToggleGroupItem>
  <ToggleGroupItem
    value="ar"
    aria-label="Arabic"
    className="w-1/2 h-full data-[state=on]:bg-[#76B729] dark:text-white data-[state=on]:text-white text-sm font-medium flex items-center justify-center"
  >
    AR
  </ToggleGroupItem>
</ToggleGroup>
  {/* Dark Mode Toggle Group */}
  <div className="flex items-center w-[44px] h-[44px]  bg-gray-100 rounded-full justify-center">
    <ToggleGroup
      type="single"
      value={isDarkMode ? 'dark' : 'light'}
      onValueChange={handleDarkModeToggle}
      className="border border-[#D9D9D9] rounded-full justify-center items-center w-[24px] h-[24px] flex overflow-hidden"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light mode"
        className="w-1/2 h-full data-[state=on]:bg-[#76B729] dark:text-white data-[state=on]:text-white text-sm font-medium flex items-center justify-center"
      >
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Dark mode"
        className="w-1/2 h-full data-[state=on]:bg-[#76B729] dark:text-white data-[state=on]:text-white text-sm font-medium flex items-center justify-center"
      >
      </ToggleGroupItem>
    </ToggleGroup>
    </div>


    <Button
      className="bg-[#76B729] hover:bg-[#6BA524] text-white font-medium text-sm px-4 py-2 rounded-lg"
    >
      Log in
    </Button>
    <Button
      className="bg-[#76B729] hover:bg-[#6BA524] text-white font-medium text-sm px-4 py-2 rounded-lg"
    >
      Join our community
    </Button>
  </div>

);

export default DesktopControls;