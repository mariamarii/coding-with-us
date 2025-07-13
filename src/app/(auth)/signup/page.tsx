import { Metadata } from 'next';
import AuthPageWrapper from '@/components/auth/AuthPageWrapper';

export const metadata: Metadata = {
  title: 'Sign Up | Coding of Us',
  description: 'Create your Coding of Us account.',
};

const SignupPage = () => {
  return <AuthPageWrapper type="signup" />;
};

export default SignupPage;
