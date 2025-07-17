import { AuthWrapper } from '@/components/auth/AuthPageWrapper';
import RegisterForm from '@/components/auth/RegisterForm';

export default function LoginPage() {
  return (
    <AuthWrapper title="Welcome back">
      <RegisterForm mode="login" />
    </AuthWrapper>
  );
}
