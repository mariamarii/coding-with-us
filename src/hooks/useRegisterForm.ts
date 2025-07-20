import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useUserRegistration } from './useUserRegisteration';
import { useUserLogin } from './useUserLogin';
import { SignupData } from '@/types/auth';
import { LoginFormValues, SignupFormValues } from '@/types/auth-forms';

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
      const signupFormData = data as SignupFormValues;
      // Ensure required fields are present for signup
      const signupData: SignupData = {
        firstName: signupFormData.firstName,
        lastName: signupFormData.lastName,
        email: signupFormData.email,
        password: signupFormData.password,
        userType: signupFormData.userType,
        phoneNumber: '',
        diploma: signupFormData.diploma?.[0] || undefined, // Handle file input
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
          router.push('/');
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