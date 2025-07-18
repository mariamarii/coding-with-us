import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login');
  };

  const navigateToSignup = () => {
    router.push('/signup');
  };

  const navigateToHome = () => {
    router.push('/');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return {
    navigateToLogin,
    navigateToSignup,
    navigateToHome,
    navigateTo,
  };
}; 