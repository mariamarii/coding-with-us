import type { LoginData, SignupData } from '@/types/auth';

export const handleLoginSubmit = async ({ email, password }: LoginData) => {
  console.log('Login credentials:', { email, password });
  // TODO: add real login API call or logic
};

export const handleSignupSubmit = async ({ name, email, password }: SignupData) => {
  console.log('Signup data:', { name, email, password });
  // TODO: add real signup API call or logic
};
