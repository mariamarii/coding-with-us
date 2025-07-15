// hooks/useForgotPassword.ts
'use client';

import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';

export const useForgotPassword = () => {
  return useApiMutation<{ email: string }>({
    url: api.resetPassword(),
    getBody: (data) => ({ email: data.email }),
    onSuccess: () => {
      console.log('Reset link sent');
    },
    onError: (err) => {
      console.error('Reset password error:', err.message);
    },
  });
};
