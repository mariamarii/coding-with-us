"use client";
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '@/queries/auth';
import { UserProfile } from '@/types/auth';

// Local storage keys
const USER_PROFILE_KEY = 'user_profile';
const USER_PROFILE_TIMESTAMP_KEY = 'user_profile_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

// Local storage utilities
const localStorageUtils = {
  getProfile(): UserProfile | null {
    try {
      const profileData = localStorage.getItem(USER_PROFILE_KEY);
      const timestamp = localStorage.getItem(USER_PROFILE_TIMESTAMP_KEY);
      
      if (!profileData || !timestamp) return null;
      
      const age = Date.now() - parseInt(timestamp);
      if (age > CACHE_DURATION) {
        // Cache expired, clear it
        localStorageUtils.clearProfile();
        return null;
      }
      
      return JSON.parse(profileData);
    } catch (error) {
      console.error('Error reading user profile from localStorage:', error);
      return null;
    }
  },

  setProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
      localStorage.setItem(USER_PROFILE_TIMESTAMP_KEY, Date.now().toString());
    } catch (error) {
      console.error('Error saving user profile to localStorage:', error);
    }
  },

  clearProfile(): void {
    try {
      localStorage.removeItem(USER_PROFILE_KEY);
      localStorage.removeItem(USER_PROFILE_TIMESTAMP_KEY);
    } catch (error) {
      console.error('Error clearing user profile from localStorage:', error);
    }
  }
};

// Enhanced user profile hook with localStorage caching
export const useUserProfileWithCache = () => {
  const { data: session } = useSession();
  
  // Get cached profile
  const getCachedProfile = (): UserProfile | null => {
    return localStorageUtils.getProfile();
  };

  // Fetch and cache user profile
  const fetchAndCacheProfile = async (): Promise<UserProfile | null> => {
    if (!session?.accessToken) return null;
    
    try {
      const profile = await getCurrentUser(session.accessToken);
      localStorageUtils.setProfile(profile);
      return profile;
    } catch (error) {
      localStorageUtils.clearProfile();
      throw error;
    }
  };

  // Clear cached profile
  const clearCachedProfile = (): void => {
    localStorageUtils.clearProfile();
  };

  // Get current profile from cache
  const userProfile = getCachedProfile();

  // Fetch fresh data if we have a session but no cached profile
  if (session?.accessToken && !userProfile) {
    fetchAndCacheProfile().catch(console.error);
  }

  // Clear profile when session is lost
  if (!session?.accessToken && userProfile) {
    clearCachedProfile();
  }

  return { 
    userProfile, 
    session,
    refetch: fetchAndCacheProfile,
    clearCache: clearCachedProfile
  };
}; 