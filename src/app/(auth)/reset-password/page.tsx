'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ResetPasswordConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emailFromUrl = searchParams.get('email');
  const tokenFromUrl = searchParams.get('token');

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

 useEffect(() => {
  if (emailFromUrl) setEmail(emailFromUrl);
  if (tokenFromUrl) setToken(tokenFromUrl.replace(/ /g, '+')); 
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
      console.log('Submitting reset with:', { email, token, password: newPassword });

      const res = await fetch('https://localhost:7061/api/v1/users/reset-password-confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          token,
          password: newPassword, // Match backend expected field
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Raw backend response:', text);

        if (text.includes('InvalidToken')) {
          throw new Error('The reset token is invalid or has expired.');
        }

        throw new Error(text || 'Failed to reset password.');
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
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-2xl font-bold">Reset Your Password</h2>

        {status === 'success' ? (
          <p className="text-[#76B729] font-medium">
            Password reset successful. Redirecting to login...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* hidden inputs for token and email (not required, but preserved) */}
            <input type="hidden" value={email} readOnly />
            <input type="hidden" value={token} readOnly />

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

            {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
