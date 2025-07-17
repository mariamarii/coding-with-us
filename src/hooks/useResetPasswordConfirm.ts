'use client';

import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

type ResetPasswordConfirmInput = {
  email: string;
  token: string;
  password: string;
};

export const useResetPasswordConfirm = () => {
  const mutation = useApiMutation<ResetPasswordConfirmInput>({
    url: api.resetPasswordConfirm(),
    getBody: (data) => ({
      email: data.email,
      token: data.token,
      password: data.password,
    }),
    onSuccess: () => {
      console.log('Password reset successful');
    },
    onError: (err) => {
      console.error('Reset password error:', err.message);
      toast.error(err.message || 'Failed to reset password. Please try again.');
    },
  });

  return {
    ...mutation,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
}; 