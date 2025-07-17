'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

export const useForgotPassword = () => {
  return useApiMutation<{ email: string }>({
    url: api.resetPassword(),
    getBody: (data) => ({ email: data.email }),
    onSuccess: () => {
      console.log('Reset link sent');
      toast.success('Password reset email sent successfully!');
    },
    onError: (err) => {
      console.error('Reset password error:', err.message);
      toast.error(err.message || 'Failed to send reset email. Please try again.');
    },
  });
}; 