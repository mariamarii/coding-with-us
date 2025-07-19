import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, getSession } from 'next-auth/react';
import { useUserRegistration } from './useUserRegisteration';
import { useUserLogin } from './useUserLogin';
import { SignupData } from '@/types/auth';
import { LoginFormValues, SignupFormValues } from '@/types/auth-forms';
import { getCurrentUser } from '@/queries/auth';
import { userProfileCache } from '@/utils/userProfileCache';

type Mode = 'login' | 'signup';

export const useRegisterForm = (mode: Mode) => {
  const router = useRouter();
  const [customError, setCustomError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const { mutate: signupMutate, isPending: isSignupLoading } = useUserRegistration(setCustomError);
  const { isPending: isLoginLoading } = useUserLogin();

  const onSubmit = async (data: LoginFormValues | SignupFormValues) => {
    setCustomError('');
    setLoginError('');

    if (isLocked) {
      setLoginError('Too many failed attempts. Please try again later.');
      return;
    }

    if (mode === 'signup') {
      // Ensure required fields are present for signup
      const signupData: SignupData = {
        name: (data as SignupFormValues).name || '',
        email: data.email,
        password: data.password,
        phoneNumber: '',
      };
      signupMutate(signupData);
    } else {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (result?.ok) {
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
              router.push('/user-home');
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
          setLoginAttempts(0);
        } else {
          const newAttempts = loginAttempts + 1;
          setLoginAttempts(newAttempts);
          setLoginError('Invalid email or password.');
          if (newAttempts >= 5) setIsLocked(true);
        }
      } catch {
        setLoginError('Something went wrong. Please try again.');
      }
    }
  };

  return {
    onSubmit,
    customError,
    loginError,
    isSignupLoading,
    isLoginLoading,
  };
}; 