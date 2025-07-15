'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useConfirmEmail } from '@/hooks/useConfirmEmail';

const ConfirmCodeForm = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();

  const confirmEmail = useConfirmEmail();

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

  const handleConfirm = async () => {
    const secret = code.join('');
    if (secret.length < 6 || !email) return setError(true);

    try {
      await confirmEmail.mutateAsync({ email, secret });
      router.push('/');
    } catch {
      setError(true);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
        <div className="flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Enter Confirmation Code</h3>
          <p className="mb-4 text-sm text-center text-gray-600">
            We’ve sent a 6-digit code to <strong>{email}</strong>
          </p>

          <div className={`flex gap-2 mb-4 ${shake ? 'shake' : ''}`}>
            {code.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputsRef.current[i] = el)}
                className={`w-10 h-12 text-xl text-center border ${
                  error ? 'border-red-500' : 'border-gray-300'
                } rounded focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]`}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          {error && <p className="mb-2 text-sm text-red-600">Invalid or incorrect code</p>}

          <div className="flex justify-end w-full gap-2">
            <button
              onClick={() => router.push('/signup')}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 text-sm rounded bg-[var(--green-primary)] text-white hover:bg-green-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmCodeForm;
