import { useState } from 'react';
import AuthContext from './auth-context';
import { User } from '../types/user';

interface ProviderProps {
  value?: [User | null, React.Dispatch<React.SetStateAction<User | null>>];
  children?: React.ReactNode;
}

export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
