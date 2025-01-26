export type User = {
  userId: number;
  email: string;
};

export type SetUserFunction = (user: User | null) => void;

export type UserHandler = {
  user: User | null;
  setUser: SetUserFunction;
};
