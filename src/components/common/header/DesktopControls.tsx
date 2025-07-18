"use client";
import React from 'react';
import { DesktopControlsProps } from '@/types/header';
import CartButton from './CartButton';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import UserProfileSection from './UserProfileSection';
import AuthButtons from './AuthButtons';

const DesktopControls: React.FC<DesktopControlsProps> = ({ 
  isDarkMode, 
  selectedLanguage, 
  handleLanguageChange, 
  handleDarkModeToggle, 
  onLoginClick, 
  onJoinCommunityClick, 
  session, 
  userProfile, 
  onSignOut 
}) => {
  return (
    <div className="hidden xl:flex items-center gap-4">
      <CartButton className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full" />

      <LanguageToggle
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
      />

      <ThemeToggle
        isDarkMode={isDarkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />

      {session && userProfile ? (
        <UserProfileSection
          session={session}
          userProfile={userProfile}
          onSignOut={onSignOut}
        />
      ) : (
        <AuthButtons
          onLoginClick={onLoginClick}
          onJoinCommunityClick={onJoinCommunityClick}
        />
      )}
    </div>
  );
};

export default DesktopControls;