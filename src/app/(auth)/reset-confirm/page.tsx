'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ResetPasswordConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emailFromUrl = searchParams.get('email');
  const tokenFromUrl = searchParams.get('token');

  const [email, setEmail] = useState(emailFromUrl || '');
  const [token, setToken] = useState(tokenFromUrl || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (emailFromUrl) setEmail(emailFromUrl);
    if (tokenFromUrl) setToken(tokenFromUrl);
  }, [emailFromUrl, tokenFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    if (newPassword !== confirmPassword) {
      setStatus('error');
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch('https://localhost:7061/api/v1/users/reset-password-confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, newPassword }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Failed to reset password.');
      }

      setStatus('success');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>

        {status === 'success' ? (
          <p className="text-[#76B729] font-medium">
             Password reset successful. Redirecting to login...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="hidden"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium">
                New Password
              </label>
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
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Confirm Password
              </label>
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
              disabled={status === 'loading'}
              className="w-full bg-[#76B729] hover:bg-[#aada55] text-black font-semibold py-2 rounded-md transition"
            >
              {status === 'loading' ? 'Submitting...' : 'Reset Password'}
            </button>

            {status === 'error' && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
