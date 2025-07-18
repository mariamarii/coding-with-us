"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { MobileMenuProps } from '@/types/header';
import CartButton from './CartButton';
import MobileMenuHeader from './MobileMenuHeader';
import MobileMenuNavigation from './MobileMenuNavigation';
import MobileMenuSettings from './MobileMenuSettings';
import MobileMenuFooter from './MobileMenuFooter';

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isDarkMode, 
  selectedLanguage, 
  handleNavClick, 
  handleLanguageChange, 
  handleDarkModeToggle, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  onLoginClick, 
  onJoinCommunityClick, 
  session, 
  userProfile, 
  onSignOut,
  courses,
  categories,
  universities,
  error
}) => {
  const [expandedCourses, setExpandedCourses] = useState(false);
  const [expandedUniversities, setExpandedUniversities] = useState(false);

  return (
    <div className="flex xl:hidden items-center gap-2">
      <CartButton />

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={isDarkMode ? 'text-gray-400' : 'text-gray-800'}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          showCloseButton={false}
          className={isDarkMode ? 'w-[350px] p-0 bg-black' : 'w-[350px] p-0 bg-white'}
        >
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
          <div className="flex flex-col h-full">
            <MobileMenuHeader
              isDarkMode={isDarkMode}
              setMobileMenuOpen={setMobileMenuOpen}
            />
            
            <div className="border-t flex-1 overflow-y-auto">
              <MobileMenuNavigation
                isDarkMode={isDarkMode}
                handleNavClick={handleNavClick}
                expandedCourses={expandedCourses}
                setExpandedCourses={setExpandedCourses}
                expandedUniversities={expandedUniversities}
                setExpandedUniversities={setExpandedUniversities}
                courses={courses}
                categories={categories}
                universities={universities}
                error={error}
              />
            </div>

            <MobileMenuSettings
              isDarkMode={isDarkMode}
              selectedLanguage={selectedLanguage}
              handleLanguageChange={handleLanguageChange}
              handleDarkModeToggle={handleDarkModeToggle}
            />

            <MobileMenuFooter
              session={session}
              userProfile={userProfile}
              onSignOut={onSignOut}
              onLoginClick={onLoginClick}
              onJoinCommunityClick={onJoinCommunityClick}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;