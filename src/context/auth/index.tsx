import * as React from 'react';

import { AuthProvider } from './auth-context';

const AuthProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { AuthProviders };
