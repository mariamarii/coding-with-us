'use client';

import RegisterForm from '@/components/auth/RegisterForm';

type Props = {
  mode: 'login' | 'signup';
};

const AuthWrapper = ({ mode }: Props) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center p-4 bg-[#f5f5f5] dark:bg-[#121212] overflow-hidden transition-colors">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#1e1e1e] shadow-md rounded-[10px] px-6 py-8 w-full max-w-[500px] flex flex-col items-center gap-[0.3rem] overflow-hidden">
        <h2 className="text-[30px] font-bold text-[var(--black-primary)] dark:text-white text-center sm:text-[1.5rem]">
          {mode === 'login' ? 'Welcome Back' : 'Sign Up'}
        </h2>
        <RegisterForm mode={mode} />
      </div>
    </div>
  );
};

export default AuthWrapper;
