'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useConfirmEmail } from './useConfirmEmail';

export const useConfirmCodeForm = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();

  const { mutate, isPending } = useConfirmEmail();

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      setShake(true);
      const timeout = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace') {
      const updatedCode = [...code];
      if (code[index]) {
        updatedCode[index] = '';
        setCode(updatedCode);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        updatedCode[index - 1] = '';
        setCode(updatedCode);
      }
    }
  };

  const handleConfirm = () => {
    const secret = code.join('');
    if (secret.length < 6 || !email) return setError(true);

    console.log('Attempting to confirm email with:', { email, secret });
    setError(false);
    mutate({ email, secret });
  };

  const handleCancel = () => {
    router.push('/signup');
  };

  return {
    code,
    error,
    shake,
    email,
    inputsRef,
    handleChange,
    handleKeyDown,
    handleConfirm,
    handleCancel,
    confirmEmail: { isPending },
  };
}; 