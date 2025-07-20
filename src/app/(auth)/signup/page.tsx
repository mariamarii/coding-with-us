import { ModernAuthWrapper } from '@/components/auth/ModernAuthWrapper';
import ModernSignupForm from '@/components/auth/ModernSignupForm';

export default function SignupPage() {
  return (
    <ModernAuthWrapper title="Sign up" mode="signup">
      <ModernSignupForm />
    </ModernAuthWrapper>
  );
}
