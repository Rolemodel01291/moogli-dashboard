import { useAuth } from '@/context/auth/auth-context';

import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate replace state={{ from: location }} to='/login' />;
  }

  return children;
}
