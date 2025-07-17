import { useForgotPassword } from '@/hooks/useForgotPassword';

export function useForgotPasswordForm() {
  const { mutate, isPending, error, isSuccess } = useForgotPassword();

  return {
    trigger: mutate,
    isMutating: isPending,
    isSuccess,
    error: error?.message || '',
  };
} 