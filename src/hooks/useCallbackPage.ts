'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { toast } from 'sonner';
import { getCurrentUser } from '@/queries/auth';
import { userProfileCache } from '@/utils/userProfileCache';

export const useCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processSocialLogin = async () => {
      const token = searchParams.get('token');
      const error = searchParams.get('error');

      if (error) {
        setError(error);
        toast.error(`Social login failed: ${error}`);
        setTimeout(() => router.push('/login'), 3000);
        return;
      }

      if (token) {
        setIsProcessing(true);
        try {
          console.log('Processing social login token:', token.substring(0, 50) + '...');
          
          // Sign in with NextAuth using the social token
          const result = await signIn('credentials', {
            socialToken: token,
            redirect: false,
          });

          if (result?.error) {
            throw new Error(result.error);
          }

          if (result?.ok) {
            // Get the updated session
            const session = await getSession();
            if (session) {
              toast.success('Social login successful!');
              
              // Clear any existing cache to force fresh fetch
              userProfileCache.clearProfile();
              
              // Fetch user profile to check role
              try {
                if (session.accessToken) {
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
              throw new Error('Failed to create session');
            }
          }
        } catch (err) {
          console.error('Social login processing error:', err);
          setError(err instanceof Error ? err.message : 'Social login failed');
          toast.error('Social login failed. Please try again.');
          setTimeout(() => router.push('/login'), 3000);
        } finally {
          setIsProcessing(false);
        }
      } else {
        // No token, redirect to login
        router.push('/login');
      }
    };

    processSocialLogin();
  }, [searchParams, router]);

  return { error, isProcessing };
}; 