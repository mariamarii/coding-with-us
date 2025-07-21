"use client";
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '@/queries/auth';
import { userProfileCache } from '@/utils/userProfileCache';
import { useState } from 'react';
import { UserProfile } from '@/types/auth';

// Enhanced user profile hook with localStorage caching
export const useUserProfile = () => {
  const { data: session, status } = useSession();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    // Initialize from cache if available
    return userProfileCache.getProfile();
  });

  // Fetch and cache user profile
  const fetchAndCacheProfile = async () => {
    if (!session?.accessToken) return null;
    
    try {
      const profile = await getCurrentUser(session.accessToken);
      userProfileCache.setProfile(profile);
      setUserProfile(profile);
      return profile;
    } catch (error) {
      userProfileCache.clearProfile();
      setUserProfile(null);
      throw error;
    }
  };

  // Clear cached profile
  const clearCachedProfile = () => {
    userProfileCache.clearProfile();
    setUserProfile(null);
  };

  // Auto-fetch profile when session changes (without useEffect)
  if (session?.accessToken && !userProfile && status === 'authenticated') {
    // Trigger fetch in next tick to avoid blocking render
    setTimeout(() => {
      fetchAndCacheProfile().catch(console.error);
    }, 0);
  }

  // Clear profile when session is lost
  if (!session?.accessToken && userProfile && status === 'unauthenticated') {
    clearCachedProfile();
  }

  return { 
    userProfile, 
    session,
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
    isUnauthenticated: status === 'unauthenticated',
    refetch: fetchAndCacheProfile,
    clearCache: clearCachedProfile,
    hasValidCache: userProfileCache.hasValidCache,
    isExpired: userProfileCache.isExpired
  };
}; 