import { ModernAuthWrapper } from '@/components/auth/ModernAuthWrapper';
import ModernLoginForm from '@/components/auth/ModernLoginForm';

export default function LoginPage() {
  return (
    <ModernAuthWrapper title="Welcome back" mode="login">
      <ModernLoginForm />
    </ModernAuthWrapper>
  );
}
