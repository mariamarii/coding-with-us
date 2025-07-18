"use client";
import React from 'react';
import { MobileMenuSettingsProps } from '@/types/header';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const MobileMenuSettings: React.FC<MobileMenuSettingsProps> = ({
  isDarkMode,
  selectedLanguage,
  handleLanguageChange,
  handleDarkModeToggle
}) => {
  return (
    <div className="border-t pl-4 pr-4 pt-4 pb-4 space-y-4">
      <div className="flex items-center px-4 justify-between">
        <span
          className={
            isDarkMode ? 'text-sm font-medium text-gray-400' : 'text-sm font-medium text-gray-700'
          }
        >
          Language
        </span>
        <LanguageToggle
          selectedLanguage={selectedLanguage}
          handleLanguageChange={handleLanguageChange}
        />
      </div>
      <div className="flex px-4 items-center justify-between">
        <span
          className={
            isDarkMode ? 'text-sm font-medium text-gray-400' : 'text-sm font-medium text-gray-700'
          }
        >
          Theme
        </span>
        <ThemeToggle
          isDarkMode={isDarkMode}
          handleDarkModeToggle={handleDarkModeToggle}
        />
      </div>
    </div>
  );
};

export default MobileMenuSettings; 