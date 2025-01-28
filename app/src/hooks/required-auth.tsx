import { PropsWithChildren } from 'react';
import useAuth from './use-auth';
import { Navigate } from 'react-router';

function RequiredAuth({ children }: PropsWithChildren) {
  const auth = useAuth();

  return auth.user ? children : <Navigate to="/signin" replace />;
}

export default RequiredAuth;
