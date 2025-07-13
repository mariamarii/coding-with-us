'use client';

import layout from '@/styles/authLayout.module.css';
import AuthForm from './AuthForm';
import { handleLoginSubmit, handleSignupSubmit } from '@/lib/utils';

type Props = {
  type: 'login' | 'signup';
};

const AuthPageWrapper = ({ type }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (type === 'login') {
      await handleLoginSubmit({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      });
    } else {
      await handleSignupSubmit({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      });
    }
  };

  return (
    <div className={layout.container}>
      <div className={layout.card}>
        <h2 className={layout.title}>{type === 'login' ? 'Welcome Back' : 'Sign Up'}</h2>
        <AuthForm type={type} onSubmit={handleSubmit} />
        <div className={layout.switchLink}>
          {type === 'login' ? (
            <>
              New to Coding of Us? <a href="/signup">Sign up</a>
            </>
          ) : (
            <>
              Already have an account? <a href="/login">Login</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPageWrapper;
