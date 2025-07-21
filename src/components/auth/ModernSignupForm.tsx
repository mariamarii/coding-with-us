'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import FormFields from '@/components/auth/FormFields';
import {
  signupSchema,
  signupDefaultValues,
  SignupFormValues,
} from '@/types/auth-forms';
import { useState } from 'react';
import Link from 'next/link';

const ModernSignupForm = () => {
  const { onSubmit, customError, isSignupLoading } = useRegisterForm('signup');
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: signupDefaultValues,
  });
  
  const { handleSubmit, formState: { errors }, register } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* All Form Fields */}
      <FormFields
        form={form}
        errors={errors}
        customError={customError}
        userType={userType}
        setUserType={setUserType}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSignupLoading}
        className="w-full bg-[#76B729] hover:bg-[#6BA524] text-white py-3 px-4 rounded-lg font-medium transition-colors"
      >
        {isSignupLoading ? 'Creating Account...' : 'Next'}
      </Button>

      {/* Login Link */}
      <div className="text-center">
        <span className="text-gray-600">Already have an account? </span>
        <Link href="/login" className="text-[#76B729] font-medium hover:text-[#6BA524]">
          Login
        </Link>
      </div>
    </form>
  );
};

export default ModernSignupForm;
