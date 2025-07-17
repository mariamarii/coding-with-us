'use client';

import { useConfirmCodeForm } from '@/hooks/useConfirmCodeForm';
import ConfirmCodeForm from './ConfirmCodeForm';

const ConfirmCodeContainer = () => {
  const {
    code,
    error,
    shake,
    email,
    inputsRef,
    handleChange,
    handleKeyDown,
    handleConfirm,
    handleCancel,
    confirmEmail,
  } = useConfirmCodeForm();

  return (
    <ConfirmCodeForm
      code={code}
      error={error}
      shake={shake}
      email={email}
      inputsRef={inputsRef}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handleConfirm={handleConfirm}
      handleCancel={handleCancel}
      confirmEmail={confirmEmail}
    />
  );
};

export default ConfirmCodeContainer; 