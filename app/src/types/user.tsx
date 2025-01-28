import { Dispatch, SetStateAction } from 'react';

export type User = {
  userId: number;
  email: string;
  token?: string;
};

export interface UserState {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}
