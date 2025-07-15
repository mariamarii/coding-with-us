'use client';

import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

type ResetPasswordConfirmInput = {
  email: string;
  token: string;
  password: string;
};

export const useResetPasswordConfirm = () => {
  return useApiMutation<ResetPasswordConfirmInput>({
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
      console.error(' Reset password error:', err.message);
    },
  });
};
