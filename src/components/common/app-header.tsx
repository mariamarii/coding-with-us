"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HeaderProps } from '@/types/landingProps';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNavigation';
import SearchBar from './header/SearchBar';
import DesktopControls from './header/DesktopControls';
import MobileMenu from './header/MobileMenu';

const Header: React.FC<HeaderProps> = ({ courses, categories, error }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'explore'>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'explore') => {
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

  return (
    <div className="relative">
      <div className="hidden sm:flex bg-gray-800 text-white px-4 py-1 text-xs justify-end gap-4">
        <button className="hover:opacity-80 transition-opacity">FAQs</button>
        <button className="hover:opacity-80 transition-opacity">Contact Us</button>
      </div>

      <header className={isDarkMode ? 'bg-black border-none' : 'bg-white border-none'}>
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20 w-full">
            <Logo isDarkMode={isDarkMode} />
            <DesktopNav
              currentPage={currentPage}
              handleNavClick={handleNavClick}
              isDarkMode={isDarkMode}
              courses={courses}
              categories={categories}
              error={error}
            />
            <SearchBar />
            <div className="flex items-center gap-2 flex-shrink-0">
              <DesktopControls
                isDarkMode={isDarkMode}
                selectedLanguage={selectedLanguage}
                handleLanguageChange={handleLanguageChange}
                handleDarkModeToggle={handleDarkModeToggle}
              />
              <MobileMenu
                isDarkMode={isDarkMode}
                selectedLanguage={selectedLanguage}
                handleNavClick={handleNavClick}
                handleLanguageChange={handleLanguageChange}
                handleDarkModeToggle={handleDarkModeToggle}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;