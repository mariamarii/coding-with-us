'use client';

import { usePathname, useRouter } from 'next/navigation';

export const useAuthFormContainer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isForgotPassword = pathname.includes('/forgot');
  const isChangePassword = pathname.includes('/change-password');
  const isChangeEmail = pathname.includes('/change-email');

  const handleBack = () => {
    if (isForgotPassword) {
      router.push('/login');
    } else {
      router.push('/');
    }
  };

  const handleSuccess = () => {
    router.push('/login');
  };

  return {
    isForgotPassword,
    isChangePassword,
    isChangeEmail,
    handleBack,
    handleSuccess,
  };
}; 