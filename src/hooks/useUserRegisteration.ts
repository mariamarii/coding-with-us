// hooks/useUserRegistration.ts
'use client';

import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';
import { SignupData } from '@/types/auth';
import { useRouter } from 'next/navigation';

export const useUserRegistration = () => {
  const router = useRouter();

  return useApiMutation<SignupData>({
    url: api.register(),
    getBody: (data) => ({
      name: data.name,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber ?? '0000000000',
    }),
    onSuccess: (_, input) => {
      router.push(`/confirm?email=${encodeURIComponent(input.email)}`);
    },
    onError: (err) => {
      console.error('Signup error:', err.message);
    },
  });
};
