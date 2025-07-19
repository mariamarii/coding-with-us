// hooks/useUserLogin.ts
'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';
import { LoginData } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { signIn, getSession } from 'next-auth/react';
import { getCurrentUser } from '@/queries/auth';
import { userProfileCache } from '@/utils/userProfileCache';

export const useUserLogin = () => {
  const router = useRouter();

  return useApiMutation<LoginData>({
    url: api.login(),
    getBody: (data) => ({
      email: data.email,
      password: data.password,
    }),
    onSuccess: async (_, input) => {
      const result = await signIn('credentials', {
        redirect: false,
        email: input.email,
        password: input.password,
      });

      if (result?.ok) {
        toast.success('Login successful!');
        
        // Clear any existing cache to force fresh fetch
        userProfileCache.clearProfile();
        
        // Fetch user profile to check role
        try {
          const session = await getSession();
          if (session?.accessToken) {
            const userProfile = await getCurrentUser(session.accessToken);
            // Cache the fresh profile
            userProfileCache.setProfile(userProfile);
            
            if (userProfile?.roles?.includes('User')) {
              router.push('/mycourses');
            } else {
              router.push('/');
            }
          } else {
            // Fallback to home page if no access token
            router.push('/');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          // Fallback to home page if profile fetch fails
          router.push('/');
        }
      } else {
        toast.error('Invalid email or password');
      }
    },
    onError: (err) => {
      toast.error(err.message || 'Login failed. Please try again.');
    },
  });
};
