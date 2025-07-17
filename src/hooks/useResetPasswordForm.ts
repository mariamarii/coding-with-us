'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useResetPasswordConfirm } from './useResetPasswordConfirm';
import { resetPasswordConfirmSchema, type ResetPasswordConfirmFormValues } from '@/types/auth-forms';

export const useResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resetPasswordConfirm = useResetPasswordConfirm();

  const emailFromUrl = searchParams?.get('email') ?? '';
  const tokenFromUrl = searchParams?.get('token') ?? '';

  const form = useForm<ResetPasswordConfirmFormValues>({
    resolver: zodResolver(resetPasswordConfirmSchema),
    defaultValues: {
      email: '',
      token: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (emailFromUrl) {
      form.setValue('email', emailFromUrl);
    }
    if (tokenFromUrl) {
      form.setValue('token', tokenFromUrl.replace(/ /g, '+')); // fix URL + encoding
    }
  }, [emailFromUrl, tokenFromUrl, form]);

  const onSubmit = async (data: ResetPasswordConfirmFormValues) => {
    try {
      await resetPasswordConfirm.mutateAsync({
        email: data.email,
        token: data.token,
        password: data.password,
      });

      toast.success('Password reset successful!');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err: any) {
      const errorMessage = err?.message || 'Something went wrong. Please try again.';
      toast.error(errorMessage);
    }
  };

  return {
    form,
    onSubmit,
    resetPasswordConfirm,
  };
}; 