'use client';

import { useMutation } from '@tanstack/react-query';
import { SignupData } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { api } from '@/config/api'; // adjust this path based on your structure

export function useUserRegistration() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignupData) => {
      const res = await fetch(api.register(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          phoneNumber: '0000000000',
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Signup failed');
      }

      return res;
    },
    onSuccess: async (_, variables) => {
      router.push(`/confirm?email=${encodeURIComponent(variables.email)}`);
    },
    onError: (error: any) => {
      console.error('Signup error:', error);
    },
  });
}
