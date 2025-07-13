import { Metadata } from 'next';
import AuthPageWrapper from '@/components/auth/AuthPageWrapper';

export const metadata: Metadata = {
  title: 'Login | Coding of Us',
  description: 'Login to your Coding of Us account.',
};

const LoginPage = () => {
  return <AuthPageWrapper type="login" />;
};

export default LoginPage;
