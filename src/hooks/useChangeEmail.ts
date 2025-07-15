
'use client';

import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

export const useChangeEmail = (token: string) => {
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
    },
    onError: (err) => {
      console.error('Change email error:', err.message);
    },
  });
};
