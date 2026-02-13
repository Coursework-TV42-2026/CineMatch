'use client';

import { type User } from '@supabase/supabase-js';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { type TUser } from '@/types/user';

const extractUserData = (user: User | null): TUser | null => {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
  };
};

type TUserContext = {
  user: TUser | null;
  pending: boolean;
  signOut: () => void;
};

const UserContext = createContext<TUserContext | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [pending, setPending] = useState<boolean>(true);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    return supabase.auth.signOut();
  }, []);

  useEffect(() => {
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(extractUserData(session?.user ?? null));
      setPending(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={{ user, pending, signOut }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
