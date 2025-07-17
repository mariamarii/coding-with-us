'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { useSessionToken } from './useSessionToken';
import { api } from '@/config/api';

export const useChangeEmail = () => {
  const token = useSessionToken();
  
  return useApiMutation<{
    oldEmail: string;
    newEmail: string;
  }>({
    url: api.changeEmail(),
    getHeaders: () => ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    getBody: (data) => ({
      oldEmail: data.oldEmail,
      newEmail: data.newEmail,
    }),
    onSuccess: () => {
      console.log('Email changed successfully');
      toast.success('Email changed successfully!');
    },
    onError: (err) => {
      console.error('Change email error:', err.message);
      toast.error(err.message || 'Failed to change email. Please try again.');
    },
  });
}; 