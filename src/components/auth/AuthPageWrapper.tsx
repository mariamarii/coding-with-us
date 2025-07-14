'use client';

import AuthForm from './AuthForm';
import { handleLoginSubmit, handleSignupSubmit } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  type: 'login' | 'signup';
};

const AuthPageWrapper = ({ type }: Props) => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if (type === 'login') {
        await handleLoginSubmit({ email, password });
        router.push('/');
      } else {
        await handleSignupSubmit({
          name: formData.get('name') as string,
          email,
          password,
        });

        router.push(`/confirm?email=${encodeURIComponent(email)}`);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed');
    }
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center p-4 bg-[#f5f5f5] dark:bg-[#121212] overflow-hidden transition-colors">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#1e1e1e] shadow-md rounded-[10px] px-6 py-8 w-full max-w-[500px] flex flex-col items-center gap-[0.3rem] overflow-hidden">
        <h2 className="text-[30px] font-bold text-[var(--black-primary)] dark:text-white text-center sm:text-[1.5rem]">
          {type === 'login' ? 'Welcome Back' : 'Sign Up'}
        </h2>

        <AuthForm type={type} onSubmit={handleSubmit} />

        {errorMsg && (
          <p className="text-red-600 mt-4 text-center dark:text-red-400">{errorMsg}</p>
        )}

        <div className="text-sm text-center text-[#666] dark:text-white">
          {type === 'login' ? (
            <>
              New to Coding with Us?{' '}
              <a
                href="/signup"
                className="text-[var(--green-primary)] hover:underline dark:text-#36C323"
              >
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a
                href="/login"
                className="text-[var(--green-primary)] hover:underline dark:text-[#36C323]"
              >
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPageWrapper;
