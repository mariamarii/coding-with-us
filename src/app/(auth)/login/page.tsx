import { AuthWrapper } from '@/components/auth/AuthPageWrapper';
import RegisterForm from '@/components/auth/RegisterForm';

export default function LoginPage() {
  const title = 'Login';
 
  return <AuthWrapper title={title} children={<RegisterForm mode="login" />} />;
}
