'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SocialLogin from '@/components/auth/SocialLogin';
import { LoginData, SignupData } from '@/types/auth';
import { signupSchema, loginSchema } from '@/components/auth/FormValidationSchema';
import { useUserRegistration } from '@/hooks/useUserRegisteration';
import { useUserLogin } from '@/hooks/useUserLogin';
import { z } from 'zod';

type Mode = 'login' | 'signup';

type Props = {
  mode: Mode;
};

const RegisterForm = ({ mode }: Props) => {
  const schema = mode === 'signup' ? signupSchema : loginSchema;
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate: signupMutate, isLoading: isSignupLoading } = useUserRegistration();
  const { mutate: loginMutate, isLoading: isLoginLoading } = useUserLogin();

  const onSubmit = (data: FormData) => {
    if (mode === 'signup') {
      signupMutate(data as SignupData);
    } else {
      loginMutate(data as LoginData);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[10px] w-full">
      {mode === 'signup' && (
        <>
          <label htmlFor="name" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]">
            Full Name
          </label>
          <input
            type="text"
            {...register('name')}
            placeholder="Enter your full name"
            className={`w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 ${
  mode === 'signup' ? 'p-[8px_10px] text-xs' : 'p-[12px_14px]'
}`}

          />
          {errors.name && <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">
  {errors.name?.message}
</p>}
        </>
      )}

      <label htmlFor="email" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]">
        Email
      </label>
      <input
        type="email"
        {...register('email')}
        placeholder="name@email.com"
        className={`w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 ${
  mode === 'signup' ? 'p-[8px_10px] text-xs' : 'p-[12px_14px]'
}`}

      />
      {errors.email && <p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">
  {errors.email?.message}
</p>}

      <label htmlFor="password" className="text-sm font-bold text-[#333] dark:text-gray-200 -mb-[3px]">
        Password
      </label>
      <input
        type="password"
        {...register('password')}
        placeholder="Enter your password"
        className={`w-full text-sm text-[#333] dark:text-white dark:bg-[#1e1e1e] dark:border-gray-600 dark:placeholder-gray-400 border border-[#ccc] rounded-[6px] placeholder:text-[#999] focus:outline-none focus:border-[#7CB342] focus:ring-2 focus:ring-[#7CB342]/20 ${
  mode === 'signup' ? 'p-[8px_10px] text-xs' : 'p-[12px_14px]'
}`}

      />
      {errors.password &&<p className="text-[#e63946] dark:text-red-400 text-[0.76rem] mt-1 mb-2">
  {errors.password?.message}
</p>}

      <button
        type="submit"
        className="w-full bg-[var(--green-primary)] dark:bg-[#36C323] text-white font-bold text-sm rounded-[6px] px-4 py-3 transition-colors duration-300 hover:!bg-[#689F38]"
      >
        {mode === 'signup' ? 'Sign Up' : 'Login'}
      </button>

      <div className="flex items-center text-center text-[#666] dark:text-gray-300 text-sm my-1">
        <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 mr-3"></span>
        or
        <span className="flex-1 h-[0.2px] bg-[#ccc] dark:bg-gray-600 ml-3"></span>
      </div>


      <SocialLogin />
      <div className="text-sm text-center text-[#666] dark:text-white">
        {mode === 'signup' ? (
          <>
            Already have an account?{' '}
            <a
              href="/login"
                className="text-[var(--green-primary)] hover:underline dark:text-[#36C323]"
              >
                Login
              </a>
            </>
          ) : ( 
            <>
              New to Coding with Us?{' '}
              <a
                href="/signup"
                className="text-[var(--green-primary)] hover:underline dark:text-#36C323"
              >
                Sign up
              </a>
            </>
          ) }
        </div>
    </form>
  );
};

export default RegisterForm;
