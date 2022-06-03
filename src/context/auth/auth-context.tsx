import * as React from 'react';

import type { TLogin, TRegister } from '@/auth-provider';
import {
  firebaseAuth,
  localStorageKey,
  login as firebaseLogin,
  logout as firebaseLogout,
  register as firebaseRegister,
} from '@/auth-provider';
import { client } from '@/utils/api-client';

import type { User } from 'firebase/auth';
import { getIdToken, onAuthStateChanged } from 'firebase/auth';

type TUser = User & {
  accessToken?: string;
  token?: string;
};
interface AuthState {
  user: TUser | null | undefined;
  register: (values: TRegister) => Promise<void>;
  login: (values: TLogin) => Promise<void>;
  logout: () => void;
}

const AuthContext = React.createContext<AuthState | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [user, setUser] = React.useState<User | null | undefined>();
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (res) => {
        if (res) {
          const refreshedToken = await getIdToken(res, true);
          localStorage.setItem(localStorageKey, refreshedToken);
        }
        setUser(res);
        setIsLoading(false);
      },
      setError
    );

    return unsubscribe;
  }, []);

  const register = React.useCallback(
    (values: TRegister) => firebaseRegister(values),
    []
  );

  const logout = React.useCallback(() => firebaseLogout(), []);

  const login = React.useCallback(
    (values: TLogin) => firebaseLogin(values).then(setUser),
    [setUser]
  );

  const value = React.useMemo(
    () => ({ user, register, login, logout }),
    [user, register, login, logout]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

function useClient<T>() {
  const token = localStorage.getItem(localStorageKey);

  return React.useCallback(
    (endpoint: string, config?: RequestInit) =>
      client<T>(endpoint, { ...config, token }),
    [token]
  );
}

export { AuthProvider, useAuth, useClient };
