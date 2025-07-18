"use client";
import { useState } from 'react';
import { NavigationPage } from '@/types/navigation';

export const useHeaderState = () => {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavClick = (page: NavigationPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (language: 'en' | 'ar') => {
    if (language) {
      setSelectedLanguage(language);
    }
  };

  const handleDarkModeToggle = (value: string) => {
    setIsDarkMode(value === 'dark');
  };

  return {
    currentPage,
    selectedLanguage,
    mobileMenuOpen,
    isDarkMode,
    setMobileMenuOpen,
    handleNavClick,
    handleLanguageChange,
    handleDarkModeToggle,
  };
}; 