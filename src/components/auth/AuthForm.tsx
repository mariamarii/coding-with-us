'use client';

import styles from '@/styles/authForm.module.css';
import SocialLogin from './SocialLogin';

interface Props {
  type: 'login' | 'signup';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ type, onSubmit }: Props) => {
  const isLogin = type === 'login';

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {!isLogin && (
        <>
          <label className={styles.label} htmlFor="name">Full Name</label>
          <input className={styles.input} type="text" name="name" placeholder="Enter your full name" required />
        </>
      )}

      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.input} type="email" name="email" placeholder="name@email.com" required />

      <label className={styles.label} htmlFor="password">Password</label>
      <input className={styles.input} type="password" name="password" placeholder="Enter your password" required />

      <button type="submit" className={styles.button}>{isLogin ? 'Login' : 'Sign Up'}</button>

      <div className={styles.divider}>or</div>

      <SocialLogin />
    </form>
  );
};

export default AuthForm;
