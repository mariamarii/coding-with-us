'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import SocialLogin from '@/components/auth/SocialLogin';
import PasswordInput from '@/components/auth/PasswordInput';
import {
  loginSchema,
  loginDefaultValues,
  LoginFormValues,
} from '@/types/auth-forms';
import Link from 'next/link';

const ModernLoginForm = () => {
  const { onSubmit, loginError, isLoginLoading } = useRegisterForm('login');

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });
  
  const { handleSubmit, formState: { errors }, register } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email */}
      <div>
        <Label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@email.com"
          {...register('email')}
          className="w-full px-3 py-2 border  bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#76B729] focus:border-[#76B729]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <PasswordInput
        id="password"
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message || loginError}
        {...register('password')}
      />

      {/* Forgot Password Link */}
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm font-medium text-[#76B729] hover:text-[#6BA524]">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoginLoading}
        className="w-full px-4 py-3 font-medium text-white transition-colors bg-[#76B729] rounded-lg hover:bg-[#6BA524]"
      >
        {isLoginLoading ? 'Signing in...' : 'Sign In'}
      </Button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500 bg-[#F9F9F9]">Or</span>
        </div>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Sign Up Link */}
      <div className="text-center">
        <span className="text-gray-600">Don't have an account? </span>
        <Link href="/signup" className="font-medium text-[#76B729] hover:text-[#6BA524]">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default ModernLoginForm;
