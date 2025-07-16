'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { signupSchema, loginSchema } from '@/components/auth/FormValidationSchema';
import { useUserRegistration } from '@/hooks/useUserRegisteration';
import { useUserLogin } from '@/hooks/useUserLogin';
import { SignupData, LoginData } from '@/types/auth';
import SocialLogin from '@/components/auth/SocialLogin';

type Mode = 'login' | 'signup';

type Props = {
  mode: Mode;
};

const RegisterForm = ({ mode }: Props) => {
  const router = useRouter();
  const schema = mode === 'signup' ? signupSchema : loginSchema;
  type FormData = z.infer<typeof signupSchema> | z.infer<typeof loginSchema>;

  const [customError, setCustomError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate: signupMutate, isPending: isSignupLoading } = useUserRegistration(setCustomError);
  const { mutate: loginMutate, isPending: isLoginLoading } = useUserLogin();

  const onSubmit = async (data: FormData) => {
    setCustomError('');
    setLoginError('');

    if (isLocked) {
      setLoginError('Too many failed attempts. Please try again later.');
      return;
    }

    if (mode === 'signup') {
      signupMutate(data as SignupData);
    } else {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (result?.ok) {
          router.push('/');
          setLoginAttempts(0);
        } else {
          const newAttempts = loginAttempts + 1;
          setLoginAttempts(newAttempts);
          setLoginError('Invalid email or password.');
          if (newAttempts >= 5) setIsLocked(true);
        }
      } catch {
        setLoginError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        {mode === 'signup' && (
          <FormField
            control={form.control}
            name="fullName" 
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your full name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="name@example.com" type="email" />
              </FormControl>
              <FormMessage />
              {mode === 'signup' && customError && (
                <p className="mt-1 text-sm text-red-500">Email already exists</p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your password" type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {mode === 'login' && loginError && (
          <p className="mt-1 text-sm text-red-500">{loginError}</p>
        )}

        <Button
          
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isSignupLoading || isLoginLoading}
        >
          {mode === 'signup'
            ? isSignupLoading
              ? 'Signing Up...'
              : 'Sign Up'
            : isLoginLoading
            ? 'Logging In...'
            : 'Login'}
        </Button>

        <div className="flex items-center my-3 text-sm text-center text-gray-500 dark:text-gray-300">
          <span className="flex-1 h-px mr-3 bg-gray-300 dark:bg-gray-600" />
          or
          <span className="flex-1 h-px ml-3 bg-gray-300 dark:bg-gray-600" />
        </div>

        <SocialLogin />

        <p className="text-sm text-center text-gray-600 dark:text-white">
          {mode === 'signup' ? (
            <>
              Already have an account?{' '}
              <a href="/login" className="text-green-600 hover:underline dark:text-[#36C323]">
                Login
              </a>
            </>
          ) : (
            <>
              New to our platform?{' '}
              <a href="/signup" className="text-green-600 hover:underline dark:text-[#36C323]">
                Sign up
              </a>
            </>
          )}
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
