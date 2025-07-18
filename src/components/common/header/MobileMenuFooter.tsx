"use client";
import React from 'react';
import { MobileMenuFooterProps } from '@/types/header';
import UserProfileSection from './UserProfileSection';
import AuthButtons from './AuthButtons';

const MobileMenuFooter: React.FC<MobileMenuFooterProps> = ({
  session,
  userProfile,
  onSignOut,
  onLoginClick,
  onJoinCommunityClick,
  setMobileMenuOpen
}) => {
  const handleLoginClick = () => {
    onLoginClick();
    setMobileMenuOpen(false);
  };

  const handleJoinCommunityClick = () => {
    onJoinCommunityClick();
    setMobileMenuOpen(false);
  };

  const handleSignOut = () => {
    onSignOut();
    setMobileMenuOpen(false);
  };

  return (
    <div className="border-t mt-auto px-8 py-4 justify-between flex space-y-3">
      {session && userProfile ? (
        <UserProfileSection
          session={session}
          userProfile={userProfile}
          onSignOut={handleSignOut}
        />
      ) : (
        <AuthButtons
          onLoginClick={handleLoginClick}
          onJoinCommunityClick={handleJoinCommunityClick}
        />
      )}
    </div>
  );
};

export default MobileMenuFooter; 