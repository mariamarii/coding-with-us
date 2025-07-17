// hooks/useUserLogin.ts
'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';
import { LoginData } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

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
        router.push('/');
      } else {
        toast.error('Invalid email or password');
      }
    },
    onError: (err) => {
      toast.error(err.message || 'Login failed. Please try again.');
    },
  });
};
