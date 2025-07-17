'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility';
import { type ResetPasswordConfirmFormValues } from '@/types/auth-forms';

type ResetPasswordFormProps = {
  onSubmit: (data: ResetPasswordConfirmFormValues) => Promise<void>;
  resetPasswordConfirm: {
    isPending: boolean;
    isSuccess: boolean;
    error: any;
  };
};

const ResetPasswordForm = ({
  onSubmit,
  resetPasswordConfirm,
}: ResetPasswordFormProps) => {
  const form = useFormContext<ResetPasswordConfirmFormValues>();
  const {
    showPassword: showNewPassword,
    togglePasswordVisibility: toggleNewPassword,
  } = usePasswordVisibility();
  const {
    showPassword: showConfirmPassword,
    togglePasswordVisibility: toggleConfirmPassword,
  } = usePasswordVisibility();

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9F9F9] px-4">
      <Card className="w-full max-w-md bg-transparent border-none rounded-none shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-[#282837] font-bold text-2xl sm:text-3xl text-center">
            Reset Your Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          {resetPasswordConfirm.isSuccess ? (
            <div className="flex items-center justify-center p-4 text-green-800 border border-green-200 rounded-lg bg-green-50">
              <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
              <span>Password reset successful. Redirecting to login...</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" {...form.register('email')} />
              <input type="hidden" {...form.register('token')} />

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#75757E] font-medium text-base sm:text-lg">
                  New password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Enter your new password"
                    className="h-[38px] w-full bg-white"
                    {...form.register('password')}
                  />
                  <button
                    type="button"
                    onClick={toggleNewPassword}
                    className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {form.formState.errors.password && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#75757E] font-medium text-base sm:text-lg">
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your new password"
                    className="h-[38px] w-full bg-white"
                    {...form.register('confirmPassword')}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPassword}
                    className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {form.formState.errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={resetPasswordConfirm.isPending}
                className="w-full sm:w-auto px-6 h-[38px] bg-[#C0DE9D] hover:bg-[#76B729] text-white text-base font-bold"
              >
                {resetPasswordConfirm.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
