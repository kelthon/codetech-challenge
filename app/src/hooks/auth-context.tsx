import { createContext } from 'react';
import { UserState } from '../types/user';

const AuthContext = createContext<UserState>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
