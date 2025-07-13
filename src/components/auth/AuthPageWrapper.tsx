'use client';

import layout from '@/styles/authLayout.module.css';
import AuthForm from './AuthForm';
import { handleLoginSubmit, handleSignupSubmit } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

type Props = {
  type: 'login' | 'signup';
};

const AuthPageWrapper = ({ type }: Props) => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if (type === 'login') {
        await handleLoginSubmit({ email, password });
        router.push('/');
      } else {
        // signup
        await handleSignupSubmit({
          name: formData.get('name') as string,
          email,
          password,
        });

        setRegisteredEmail(email);
        setShowConfirmation(true);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed');
    }
  };

  return (
    <div className={layout.container}>
      <div className={layout.card}>
        <h2 className={layout.title}>
          {type === 'login' ? 'Welcome Back' : 'Sign Up'}
        </h2>

        <AuthForm type={type} onSubmit={handleSubmit} />

        {errorMsg && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMsg}</p>}

        <div className={layout.switchLink}>
          {type === 'login' ? (
            <>
              New to Coding with Us? <a href="/signup">Sign up</a>
            </>
          ) : (
            <>
              Already have an account? <a href="/login">Login</a>
            </>
          )}
        </div>
      </div>

      {/* Show confirmation modal only after signup */}
      {showConfirmation && (
        <ConfirmationModal
          email={registeredEmail}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default AuthPageWrapper;
