'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility';
import {
  signupSchema,
  loginSchema,
  signupDefaultValues,
  loginDefaultValues,
  SignupFormValues,
  LoginFormValues,
} from '@/types/auth-forms';
import SocialLogin from '@/components/auth/SocialLogin';
import Link from 'next/link';

type Mode = 'login' | 'signup';

type Props = {
  mode: Mode;
};

const RegisterForm = ({ mode }: Props) => {
  const { onSubmit, customError, loginError, isSignupLoading, isLoginLoading } = useRegisterForm(mode);
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

    if (mode === 'signup') {
    const form = useForm<SignupFormValues>({
      resolver: zodResolver(signupSchema),
      defaultValues: signupDefaultValues,
    });
    const { handleSubmit, formState: { errors } } = form;
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[6px] w-full">
        <Label htmlFor="name" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[2px]">
          Full Name
        </Label>
                  <Input
          type="text"
          {...form.register('name')}
                    placeholder="Enter your full name"
          className="w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 p-[6px_8px] text-xs h-[32px]"
        />
        {errors.name && (
          <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-0 mb-1">
            {errors.name.message}
          </p>
        )}

        <Label htmlFor="email" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[2px]">
          Email
        </Label>
                <Input
                  type="email"
          {...form.register('email')}
          placeholder="name@email.com"
          className="w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 p-[6px_8px] text-xs h-[32px]"
        />
        {customError && (
          <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-0 mb-1">Email already exists</p>
        )}
        {errors.email && (
          <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-0 mb-1">{errors.email.message}</p>
        )}

        <Label htmlFor="password" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[2px]">
          Password
        </Label>
        <div className="relative">
                <Input
            type={showPassword ? 'text' : 'password'}
            {...form.register('password')}
                  placeholder="Enter your password"
            className="w-full pr-10 text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 p-[6px_8px] text-xs h-[32px]"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-3 top-1/2 dark:text-gray-300"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 h-4 fill-current">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 fill-current">
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-0 mb-1">{errors.password.message}</p>
        )}
        <Button
          type="submit"
          disabled={isSignupLoading}
          className="w-full bg-[#7CB342] dark:bg-[#36C323] text-white font-bold text-sm rounded-[6px] px-4 py-2 transition-colors duration-300 hover:!bg-[#689F38] h-[36px] mt-2"
        >
          {isSignupLoading ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <div className="flex items-center text-center text-[#666] dark:text-gray-300 text-sm my-1">
          <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 mr-3"></span>
          or
          <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 ml-3"></span>
        </div>
        <SocialLogin />
        <div className="text-sm text-center text-[#666] dark:text-white">
              Already have an account?{' '}
          <Link href="/login" className="text-[#7CB342] hover:underline dark:text-[#36C323]">
                Login
          </Link>
        </div>
      </form>
    );
  }

  // Login mode
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });
  const { handleSubmit, formState: { errors } } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[10px] w-full">
      <Label htmlFor="email" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]">
        Email
      </Label>
      <Input
        type="email"
        {...form.register('email')}
        placeholder="name@email.com"
        className="w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 p-[12px_14px]"
      />
      {errors.email && (
        <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">{errors.email.message}</p>
      )}
      <Label htmlFor="password" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]">
        Password
      </Label>
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          {...form.register('password')}
          placeholder="Enter your password"
          className="w-full pr-10 text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 p-[12px_14px]"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-3 top-1/2 dark:text-gray-300"
          tabIndex={-1}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
            </svg>
          )}
        </button>
      </div>
      {errors.password && (
        <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">{errors.password.message}</p>
      )}
      {loginError && (
        <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">{loginError}</p>
      )}
      <div className="text-right">
        <Link href="/forgot-password" className="text-[#7CB342] hover:underline text-sm">
          Forgot Password?
        </Link>
      </div>
      <Button
        type="submit"
        disabled={isLoginLoading}
        className="w-full bg-[#7CB342] dark:bg-[#36C323] text-white font-bold text-sm rounded-[6px] px-4 py-3 transition-colors duration-300 hover:!bg-[#689F38]"
      >
        {isLoginLoading ? 'Logging In...' : 'Login'}
      </Button>
      <div className="flex items-center text-center text-[#666] dark:text-gray-300 text-sm my-1">
        <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 mr-3"></span>
        or
        <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 ml-3"></span>
      </div>
      <SocialLogin />
      <div className="text-sm text-center text-[#666] dark:text-white">
        New to Coding with Us?{' '}
        <Link href="/signup" className="text-[#7CB342] hover:underline dark:text-[#36C323]">
          Sign up
        </Link>
      </div>
      </form>
  );
};

export default RegisterForm;
