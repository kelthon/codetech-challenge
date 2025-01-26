'use client';
import { User, UserHandler } from '@/types/user';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export const UserContext = createContext<UserHandler>({
  user: null,
  setUser: () => {},
});

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserContext);
}
