'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api'; 

export const useConfirmEmail = () => {
  return useApiMutation<{ email: string; secret: string }, void>({
    url: api.confirmEmail(), 
    getBody: (data) => ({
      email: data.email,
      usageType: 0,
      secret: data.secret,
    }),
    onSuccess: () => {
      console.log('Email confirmed!');
      toast.success('Email confirmed successfully!');
    },
    onError: (err) => {
      console.error('Email confirmation failed:', err.message);
      toast.error(err.message || 'Email confirmation failed. Please try again.');
    },
  });
}; 