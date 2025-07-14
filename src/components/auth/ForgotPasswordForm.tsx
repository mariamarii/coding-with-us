'use client';

import { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('https://localhost:7061/api/v1/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Failed to request reset link.');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-bold mb-2">Forgot password</h1>
      <p className="text-sm text-gray-600 mb-6">
        Enter the email you use on <strong>Coding with us</strong>. We’ll send you a link to reset your password.
      </p>

      {status === 'success' ? (
        <p className="text-[#76B729] font-medium">Reset link sent successfully. Check your email.</p>
      ) : (
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#76B729]"
              placeholder="e.g ahmed@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#76B729] hover:bg-[#aada55] text-white font-semibold py-3 rounded-md transition"
          >
            {status === 'loading' ? 'Sending...' : 'Reset password'}
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="block text-sm text-[#76B729] underline mx-auto"
          >
            Back to login page
          </button>

          {status === 'error' && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
