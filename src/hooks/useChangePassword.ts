'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { useSessionToken } from './useSessionToken';
import { api } from '@/config/api';

export const useChangePassword = () => {
  const token = useSessionToken();
  
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
      toast.success('Password changed successfully!');
    },
    onError: (err) => {
      console.error('Change password error:', err.message);
      toast.error(err.message || 'Failed to change password. Please try again.');
    },
  });
}; 