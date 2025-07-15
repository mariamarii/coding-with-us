
'use client';

import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

export const useChangePassword = (token: string) => {
  return useApiMutation<{
    email: string;
    oldPassword: string;
    newPassword: string;
  }>({
    url: api.changePassword(),
    getHeaders: () => ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    getBody: (data) => ({
      email: data.email,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    }),
    onSuccess: () => {
      console.log('Password changed successfully');
    },
    onError: (err) => {
      console.error('Change password error:', err.message);
    },
  });
};
