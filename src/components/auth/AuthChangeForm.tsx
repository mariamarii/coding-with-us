'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForgotPassword } from '@/hooks/useForgotPassword';
import { useChangePassword } from '@/hooks/useChangePassword';
import { useChangeEmail } from '@/hooks/useChangeEmail';

type Props = {
  email: string;
  token: string;
};

const AuthChangeForm = ({ email: loggedInEmail, token }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const isForgotPassword = pathname.includes('/forgot');
  const isChangePassword = pathname.includes('/change-password');
  const isChangeEmail = pathname.includes('/change-email');

  const title = isForgotPassword
    ? 'Forgot Password'
    : isChangePassword
    ? 'Change Password'
    : 'Change Email';

  const description = isForgotPassword
    ? 'Enter your email to receive a password reset link.'
    : isChangePassword
    ? 'Enter your old and new password below.'
    : 'Enter your new email address below.';


  const forgotPasswordMutation = useForgotPassword();
  const changePasswordMutation = useChangePassword(token);
  const changeEmailMutation = useChangeEmail(token);

  const mutation =
    isForgotPassword
      ? forgotPasswordMutation
      : isChangePassword
      ? changePasswordMutation
      : changeEmailMutation;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isForgotPassword) {
        await forgotPasswordMutation.mutateAsync({ email });
      } else if (isChangePassword) {
        if (newPassword !== confirmPassword) {
          throw new Error('Passwords do not match.');
        }
        await changePasswordMutation.mutateAsync({
          email: loggedInEmail,
          oldPassword,
          newPassword,
        });
      } else if (isChangeEmail) {
        await changeEmailMutation.mutateAsync({
          oldEmail: loggedInEmail,
          newEmail,
        });
      }

      if (isChangePassword || isChangeEmail) {
        setTimeout(() => router.push('/login'), 2000);
      }
    } catch (err: any) {
      // Error is already handled in mutation.onError 
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="mb-6 text-sm text-gray-600">{description}</p>

      {mutation.isSuccess ? (
        <p className="text-[#76B729] font-medium">
          {isForgotPassword
            ? 'Reset link sent successfully. Check your email.'
            : 'Action completed successfully.'}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {isForgotPassword && (
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#76B729]"
                placeholder="e.g. ahmed@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          {isChangePassword && (
            <>
              <div>
                <label htmlFor="oldPassword" className="block mb-1 text-sm font-medium">Old Password</label>
                <input
                  id="oldPassword"
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#76B729]"
                  placeholder="Enter old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block mb-1 text-sm font-medium">New Password</label>
                <input
                  id="newPassword"
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#76B729]"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">Confirm New Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#76B729]"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {isChangeEmail && (
            <div>
              <label htmlFor="newEmail" className="block mb-1 text-sm font-medium">New Email</label>
              <input
                id="newEmail"
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#76B729]"
                placeholder="e.g. newmail@gmail.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={mutation.isLoading}
            className="w-full bg-[#76B729] hover:bg-[#aada55] text-white font-semibold py-3 rounded-md transition"
          >
            {mutation.isLoading ? 'Processing...' : title}
          </button>

          <button
            type="button"
            onClick={() => router.push(isForgotPassword ? '/login' : '/')}
            className="block text-sm text-[#76B729] underline mx-auto"
          >
            {isForgotPassword ? 'Back to login page' : 'Back to home page'}
          </button>

          {mutation.isError && (
            <p className="text-sm text-red-600">
              {(mutation.error as Error)?.message || 'Something went wrong.'}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default AuthChangeForm;
