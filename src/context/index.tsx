import * as React from 'react';

import { AuthProviders } from './auth';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const AppProviders: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProviders>{children}</AuthProviders>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export { AppProviders };
