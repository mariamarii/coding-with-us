"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { AuthButtonsProps } from '@/types/header';

const AuthButtons: React.FC<AuthButtonsProps> = ({ 
  onLoginClick, 
  onJoinCommunityClick 
}) => {
  return (
    <>
      <Button
        className="bg-[#76B729] hover:bg-[#6BA524] text-white font-medium text-sm px-4 py-2 rounded-lg"
        onClick={onLoginClick}
      >
        Log in
      </Button>
      <Button
        className="bg-[#76B729] hover:bg-[#6BA524] text-white font-medium text-sm px-4 py-2 rounded-lg"
        onClick={onJoinCommunityClick}
      >
        Join our community
      </Button>
    </>
  );
};

export default AuthButtons; 