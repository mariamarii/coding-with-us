import { toast } from 'sonner';
import { useApiMutation } from './useApiMutation';
import { api } from '@/config/api';
import { SignupData } from '@/types/auth';
import { useRouter } from 'next/navigation';

export const useUserRegistration = (setCustomError?: (msg: string) => void) => {
  const router = useRouter();

  return useApiMutation<SignupData>({
    url: api.register(),
    getBody: (data) => ({
      name: data.name,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber ?? '0000000000',
    }),
    onSuccess: (_, input) => {
      toast.success('Registration successful! Please check your email for confirmation.');
      router.push(`/confirm?email=${encodeURIComponent(input.email)}`);
    },
    onError: (err) => {
      const errorMessage = err.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
      if (setCustomError) {
        setCustomError(errorMessage); 
      }
    },
  });
};
