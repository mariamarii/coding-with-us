"use client";
import React from 'react';
import MyCoursesHero from './MyCoursesHero';
import { useUserProfile } from '@/hooks/useUserProfile';

const MyCoursesHeroWrapper: React.FC = () => {
  const { userProfile, session, isLoading, isAuthenticated } = useUserProfile();
  
  // Show loading state while session is loading to prevent hydration mismatch
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="w-full bg-gray-50 border-0 shadow-none">
          <div className="w-[72%] mx-auto pt-8 pb-6 bg-transparent border-0 shadow-none">
            <div className="h-8 bg-gray-200 animate-pulse rounded w-64"></div>
          </div>
        </div>
      </div>
    );
  }

  // Use the user profile name if available, otherwise fall back to session name or "Guest"
  const userName = userProfile?.name || session?.user?.name || "Guest";

  return <MyCoursesHero userName={userName} />;
};

export default MyCoursesHeroWrapper; 