'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

export const useConfirmEmail = () => {
  const confirmEmailUrl = api.confirmEmail();
  console.log('Confirm email API URL:', confirmEmailUrl);
  
  return useApiMutation<{ email: string; secret: string }, void>({
    url: confirmEmailUrl, 
    getBody: (data) => {
      // Validate input data
      if (!data.email || !data.secret) {
        throw new Error('Email and confirmation code are required');
      }
      
      if (data.secret.length !== 6) {
        throw new Error('Confirmation code must be 6 digits');
      }
      
      const body = {
        email: data.email.trim(),
        usageType: 0,
        secret: data.secret,
      };
      console.log('Confirm email request body:', body);
      return body;
    },
    onSuccess: () => {
      console.log('Email confirmed successfully!');
      toast.success('Email confirmed successfully!');
      // Navigate to login page after successful confirmation
      window.location.href = '/login';
    },
    onError: (err) => {
      console.error('Email confirmation failed:', err.message);
      console.error('Full error object:', err);
      
      // Provide more specific error messages
      let errorMessage = err.message;
      if (err.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (err.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to reach the server. Please try again later.';
      }
      
      toast.error(errorMessage || 'Email confirmation failed. Please try again.');
    },
  });
}; 