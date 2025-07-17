'use client';

import { FormProvider } from 'react-hook-form';
import { useResetPasswordForm } from '@/hooks/useResetPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordContainer = () => {
  const { form, onSubmit, resetPasswordConfirm } = useResetPasswordForm();

  return (
    <FormProvider {...form}>
      <ResetPasswordForm
        onSubmit={onSubmit}
        resetPasswordConfirm={resetPasswordConfirm}
      />
    </FormProvider>
  );
};

export default ResetPasswordContainer; 