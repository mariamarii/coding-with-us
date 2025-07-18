"use client";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '@/queries/auth';
import { UserProfile } from '@/types/auth';

export const useUserProfile = () => {
  const { data: session } = useSession();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (session?.accessToken) {
      getCurrentUser(session.accessToken)
        .then(profile => setUserProfile(profile))
        .catch(() => setUserProfile(null));
    } else {
      setUserProfile(null);
    }
  }, [session?.accessToken]);

  return { userProfile, session };
}; 