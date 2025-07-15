'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useResetPasswordConfirm } from '@/hooks/useResetPasswordConfirm';

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resetPasswordConfirm = useResetPasswordConfirm();

  const emailFromUrl = searchParams.get('email');
  const tokenFromUrl = searchParams.get('token');

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (emailFromUrl) setEmail(emailFromUrl);
    if (tokenFromUrl) setToken(tokenFromUrl.replace(/ /g, '+')); // fix URL + encoding
  }, [emailFromUrl, tokenFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await resetPasswordConfirm.mutateAsync({
        email,
        token,
        password: newPassword,
      });

      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err: any) {
      // Error handled in onError
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-2xl font-bold">Reset Your Password</h2>

        {resetPasswordConfirm.isSuccess ? (
          <p className="text-[#76B729] font-medium">
            Password reset successful. Redirecting to login...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" value={email} readOnly />
            <input type="hidden" value={token} readOnly />

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium">New Password</label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#76B729] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#76B729] focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={resetPasswordConfirm.isLoading}
              className="w-full bg-[#76B729] hover:bg-[#aada55] text-black font-semibold py-2 rounded-md transition"
            >
              {resetPasswordConfirm.isLoading ? 'Submitting...' : 'Reset Password'}
            </button>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordForm;
