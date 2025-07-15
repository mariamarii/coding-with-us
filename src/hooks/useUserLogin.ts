// hooks/useUserLogin.ts
'use client';
import { useMutation } from '@tanstack/react-query';
import { LoginData } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export function useUserLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!res?.ok) {
        throw new Error(res?.error ?? 'Login failed');
      }

      return res;
    },
    onSuccess: () => {
      router.push('/');
    },
    onError: (error: any) => {
      console.error('Login error:', error);
    },
  });
}
