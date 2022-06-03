import AuthenticatedApp from '@/authenticated-app';
import Login from '@/components/auth/login/login';
import Register from '@/components/auth/register/register';
import RegisterVerification from '@/components/auth/register/register-verification';
import ForgotPassword from '@/components/auth/reset-password/forgot-password-dialog';
import ResetPassword from '@/components/auth/reset-password/reset-password';
import ResetPasswordVerification from '@/components/auth/reset-password/reset-password-verification';
import { RequireAuth } from '@/components/layout/require-auth';
import { AppProviders } from '@/context';
import UnauthenticatedApp from '@/unauthenticated-app';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppProviders>
      <Routes>
        <Route element={<UnauthenticatedApp />} path='/'>
          <Route element={<Register />} path='register' />
          <Route
            element={<RegisterVerification />}
            path='register/verify-email/*'
          />
          <Route element={<Login />} path='login' />
          <Route element={<ForgotPassword />} path='forgot-password' />
          <Route element={<ResetPassword />} path='reset-password' />
          <Route
            element={<ResetPasswordVerification />}
            path='reset-password/confirmation'
          />
        </Route>
        <Route
          element={
            <RequireAuth>
              <AuthenticatedApp />
            </RequireAuth>
          }
          path='dashboard/*'
        />
      </Routes>
    </AppProviders>
  );
}

export default App;
