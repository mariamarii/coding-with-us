'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type ConfirmCodeFormProps = {
  code: string[];
  error: boolean;
  shake: boolean;
  email: string | null;
  inputsRef: React.MutableRefObject<Array<HTMLInputElement | null>>;
  handleChange: (index: number, value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent, index: number) => void;
  handleConfirm: () => Promise<void>;
  handleCancel: () => void;
  confirmEmail: {
    isPending: boolean;
  };
};

const ConfirmCodeForm = ({
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
}: ConfirmCodeFormProps) => {
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

      <div className="min-h-screen flex items-center justify-center bg-muted px-4">
        <Card className="w-full max-w-md p-6">
          <CardContent className="p-0">
            <h3 className="mb-2 text-xl font-semibold text-center">Enter Confirmation Code</h3>
            <p className="mb-4 text-sm text-center text-muted-foreground">
              We&apos;ve sent a 6-digit code to <strong>{email}</strong>
            </p>

            <div className={`flex justify-center gap-2 mb-4 ${shake ? 'shake' : ''}`}>
              {code.map((digit, i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={digit}
                  ref={(el) => {
                    inputsRef.current[i] = el;
                  }}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={`w-10 h-12 text-xl text-center ${
                    error ? 'border-red-500' : 'border-gray-300'
                  } focus-visible:ring-[#76B729]`}
                />
              ))}
            </div>

            {error && (
              <p className="mb-2 text-sm text-red-600 text-center">
                Invalid or incorrect code
              </p>
            )}

            <div className="flex justify-end w-full gap-2">
              <Button
                variant="secondary"
                onClick={handleCancel}
                className="bg-gray-200 hover:bg-gray-300 text-black"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                disabled={confirmEmail.isPending}
                className="bg-[#76B729] hover:bg-[#5da019] text-white"
              >
                {confirmEmail.isPending ? 'Verifying...' : 'Confirm'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ConfirmCodeForm;
