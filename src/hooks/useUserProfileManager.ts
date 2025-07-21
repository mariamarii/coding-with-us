"use client";
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '@/queries/auth';
import { userProfileCache } from '@/utils/userProfileCache';
import { toast } from 'sonner';

// Custom hook for managing user profile with localStorage caching
export const useUserProfileManager = () => {
  const { data: session } = useSession();

  // Get current cached profile
  const getCurrentProfile = () => {
    return userProfileCache.getProfile();
  };

  // Fetch and cache user profile
  const fetchAndCacheProfile = async () => {
    if (!session?.accessToken) {
      toast.error('No access token available');
      return null;
    }
    
    try {
      const profile = await getCurrentUser(session.accessToken);
      userProfileCache.setProfile(profile);
      toast.success('Profile updated successfully');
      return profile;
    } catch (error) {
      userProfileCache.clearProfile();
      toast.error('Failed to fetch profile');
      throw error;
    }
  };

  // Clear cached profile
  const clearCachedProfile = () => {
    userProfileCache.clearProfile();
    toast.success('Profile cache cleared');
  };

  // Check if profile needs refresh (expired or missing)
  const needsRefresh = () => {
    return !userProfileCache.hasValidCache() || userProfileCache.isExpired();
  };

  // Force refresh profile (ignore cache)
  const forceRefreshProfile = async () => {
    userProfileCache.clearProfile();
    return await fetchAndCacheProfile();
  };

  // Get profile with automatic refresh if needed
  const getProfileWithRefresh = async () => {
    if (needsRefresh()) {
      return await fetchAndCacheProfile();
    }
    return getCurrentProfile();
  };

  return {
    // Current profile state
    currentProfile: getCurrentProfile(),
    hasValidCache: userProfileCache.hasValidCache(),
    isExpired: userProfileCache.isExpired(),
    needsRefresh: needsRefresh(),
    
    // Actions
    fetchAndCacheProfile,
    clearCachedProfile,
    forceRefreshProfile,
    getProfileWithRefresh,
    
    // Session info
    session,
    isAuthenticated: !!session?.accessToken
  };
}; 