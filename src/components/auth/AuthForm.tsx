'use client';

import { useState } from 'react';
import SocialLogin from './SocialLogin';

interface Props {
  type: 'login' | 'signup';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ type, onSubmit }: Props) => {
  const isLogin = type === 'login';
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validate = (name: string, email: string, password: string) => {
    const newErrors = { name: '', email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^.{3,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()[\]{};:'",.<>/?\\|`~+=_-]).{8,}$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!isLogin && !nameRegex.test(name)) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters and include uppercase, lowercase, and a special character';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name?.value?.trim();
    const email = form.email?.value?.trim();
    const password = form.password?.value;

    const isValid = validate(name, email, password);
    if (!isValid) return;

    onSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-type={type}
      className="flex flex-col gap-[10px] w-full"
    >
      {!isLogin && (
        <>
          <label
            htmlFor="name"
            className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]"
          >
            Full Name
          </label>
          <input
            className={`w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 ${
              type === 'signup' ? 'p-[8px_10px] text-xs' : 'p-[12px_14px]'
            }`}
            type="text"
            name="name"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">
              {errors.name}
            </p>
          )}
        </>
      )}

      <label
        htmlFor="email"
        className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]"
      >
        Email
      </label>
      <input
        className={`w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 ${
          type === 'signup' ? 'p-[8px_10px] text-xs' : 'p-[12px_14px]'
        }`}
        type="email"
        name="email"
        placeholder="name@email.com"
      />
      {errors.email && (
        <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">
          {errors.email}
        </p>
      )}

      <label
        htmlFor="password"
        className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]"
      >
        Password
      </label>
      <input
        className={`w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 ${
          type === 'signup' ? 'p-[8px_10px] text-xs' : 'p-[12px_14px]'
        }`}
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      {errors.password && (
        <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">
          {errors.password}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-[var(--green-primary)] dark:bg-[#36C323] text-white font-bold text-sm rounded-[6px] px-4 py-3 transition-colors duration-300 hover:!bg-[#689F38]"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      <div className="flex items-center text-center text-[#666] dark:text-gray-300 text-sm my-1">
        <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 mr-3"></span>
        or
        <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 ml-3"></span>
      </div>

      <SocialLogin />
    </form>
  );
};

export default AuthForm;
