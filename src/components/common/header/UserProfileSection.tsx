"use client";
import React from 'react';
import Image from 'next/image';
import { UserProfileSectionProps } from '@/types/header';

const UserProfileSection: React.FC<UserProfileSectionProps> = ({ 
  session, 
  userProfile, 
  onSignOut 
}) => {
  if (!session || !userProfile) return null;

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold text-gray-800">{userProfile.name}</span>
        <div className="flex items-center gap-2 text-xs">
          <button className="text-[#76B729] underline hover:no-underline">Profile</button>
          <div className="w-px h-3 bg-gray-300"></div>
          <button 
            onClick={onSignOut}
            className="text-[#76B729] underline hover:no-underline"
          >
            Log out
          </button>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
        {userProfile.profileImage ? (
          <Image
            src={userProfile.profileImage}
            alt={userProfile.name || 'User avatar'}
            width={40}
            height={40}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`w-full h-full flex items-center justify-center text-sm font-medium text-gray-600 ${userProfile.profileImage ? 'hidden' : ''}`}>
          {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'U'}
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection; 