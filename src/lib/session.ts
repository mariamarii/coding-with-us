import { getServerSession } from 'next-auth';
import { authOptions } from './auth-options';

export const getSession = async () => {
  return await getServerSession(authOptions);
};

export const getCurrentUser = async () => {
  const session = await getSession();
  return session?.user;
};
