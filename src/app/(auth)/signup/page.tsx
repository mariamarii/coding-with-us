import { AuthWrapper } from '@/components/auth/AuthPageWrapper';
import RegisterForm from '@/components/auth/RegisterForm';

export default function SignupPage() {
  return (
    <AuthWrapper title="Create an account">
      <RegisterForm mode="signup" />
    </AuthWrapper>
  );
}
