import { UserProfile } from '@/types/auth';

const USER_PROFILE_KEY = 'user_profile';
const USER_PROFILE_TIMESTAMP_KEY = 'user_profile_timestamp';
const CACHE_DURATION = 5 * 60 * 1000;

export const userProfileCache = {

  getProfile(): UserProfile | null {
    try {
      const profileData = localStorage.getItem(USER_PROFILE_KEY);
      const timestamp = localStorage.getItem(USER_PROFILE_TIMESTAMP_KEY);
      
      if (!profileData || !timestamp) return null;
      
      const age = Date.now() - parseInt(timestamp);
      if (age > CACHE_DURATION) {
        this.clearProfile();
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
  },

  hasValidCache(): boolean {
    return this.getProfile() !== null;
  },

  getCacheAge(): number {
    try {
      const timestamp = localStorage.getItem(USER_PROFILE_TIMESTAMP_KEY);
      if (!timestamp) return 0;
      
      return Date.now() - parseInt(timestamp);
    } catch (error) {
      return 0;
    }
  },

  isExpired(): boolean {
    return this.getCacheAge() > CACHE_DURATION;
  }
}; 