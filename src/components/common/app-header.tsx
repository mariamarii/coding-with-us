"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HeaderProps } from '@/types/landingProps';
import { NavigationPage } from '@/types/navigation';
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import DesktopControls from './header/DesktopControls';
import MobileMenu from './header/MobileMenu';

const Header: React.FC<HeaderProps> = ({ courses, categories, error }) => {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock universities data - you can replace this with actual data fetching
  const universities = [
    'Cairo University', 'Ain Shams University', 'Alexandria University', 'Mansoura University',
    'Zagazig University', 'Tanta University', 'Helwan University', 'Benha University',
    'Assiut University', 'Suez Canal University', 'Minia University', 'South Valley University'
  ];

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

  return (
    <div className="relative">
      <div className=" sm:flex bg-[#282837] text-white px-4 py-3 text-xs justify-end gap-4">
        <div className=" flex justify-end gap-4 w-[92%] mx-auto">
       

        <button className="hover:opacity-80 transition-opacity text-sm">FAQs</button>
        <button className="hover:opacity-80 transition-opacity text-sm">Contact Us</button>
        </div>
        
      </div>

      <header className={isDarkMode ? 'bg-black border-none' : 'bg-white border-none'}>
        <div className=" mx-auto w-[90%]">
          <div className="flex items-center justify-between h-12 lg:h-14 w-full ">
            <div className="flex items-center">
              <Logo isDarkMode={isDarkMode} />
              </div>
             <div className="ml-auto w-[90%] flex justify-between items-start">

              <div className="">
                <DesktopNavigation
                  currentPage={currentPage}
                  handleNavClick={handleNavClick}
                  isDarkMode={isDarkMode}
                  courses={courses}
                  categories={categories}
                  universities={universities}
                  error={error}
                />
              </div>
            
            <div className="flex items-end gap-2 flex-shrink-0">
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
        </div>
      </header>
    </div>
  );
};

export default Header;