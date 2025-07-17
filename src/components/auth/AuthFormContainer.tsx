'use client';

import ForgotPasswordForm from './ForgotPasswordForm';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';

type Props = {
  email: string;
  isForgotPassword: boolean;
  isChangePassword: boolean;
  isChangeEmail: boolean;
  handleBack: () => void;
};

const AuthFormContainer = ({
  email,
  isForgotPassword,
  isChangePassword,
  isChangeEmail,
  handleBack,
}: Props) => {
  if (isForgotPassword) {
    return <ForgotPasswordForm onBack={handleBack} />;
  }

  if (isChangePassword) {
    return (
      <ChangePasswordForm
        email={email}
        onBack={handleBack}
      />
    );
  }

  if (isChangeEmail) {
    return (
      <ChangeEmailForm
        email={email}
        onBack={handleBack}
      />
    );
  }

  return null;
};

export default AuthFormContainer; 