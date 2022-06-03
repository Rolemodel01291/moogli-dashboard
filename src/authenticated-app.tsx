import { useEffect } from 'react';

import {
  Navigation,
  NavigationBadgeInfo,
} from '@/components/layout/navigation';
import { Button } from '@/components/ui/button';
import CheckingDialog from '@/components/verification/checking-dialog';
import Verification from '@/components/verification/verification';
import { useAuth } from '@/context/auth/auth-context';
import { useVerificationStatus } from '@/utils/hooks/entity';

import { Route, Routes, useNavigate } from 'react-router-dom';

function AuthenticatedApp() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { verificationStatus, isSuccess } = useVerificationStatus({ retry: 0 });

  useEffect(() => {
    if (isSuccess && verificationStatus !== 0) {
      navigate('/dashboard/verification');
    }
  }, [verificationStatus, navigate, isSuccess]);

  return (
    <div className='h-screen bg-neutrals-30'>
      <Navigation />
      {verificationStatus === 0 && <NavigationBadgeInfo />}
      <Routes>
        <Route
          element={
            <div className='mt-8 text-center'>
              {verificationStatus === 0 && <Verification />}
            </div>
          }
          index
        />
        <Route
          element={
            <div className='mt-8 text-center'>
              <CheckingDialog status={verificationStatus} />
            </div>
          }
          path='verification'
        />
      </Routes>
      <div className='mt-5'>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default AuthenticatedApp;
