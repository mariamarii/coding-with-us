'use client';

import { useAuthFormContainer } from '@/hooks/useAuthFormContainer';
import AuthFormContainer from './AuthFormContainer';

type Props = {
  email: string;
};

const AuthChangeForm = ({ email }: Props) => {
  const {
    isForgotPassword,
    isChangePassword,
    isChangeEmail,
    handleBack,
  } = useAuthFormContainer();

  return (
    <AuthFormContainer
      email={email}
      isForgotPassword={isForgotPassword}
      isChangePassword={isChangePassword}
      isChangeEmail={isChangeEmail}
      handleBack={handleBack}
    />
  );
};

export default AuthChangeForm;
