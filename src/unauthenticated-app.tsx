import { Button } from '@/components/ui/button';

import { Outlet, useNavigate } from 'react-router-dom';

function UnauthenticatedApp() {
  const navigate = useNavigate();

  const onRegisterButtonClick = () => {
    navigate('/register');
  };

  const onLoginButtonClick = () => {
    navigate('/login');
  };

  return (
    <header className='flex w-60 flex-col space-y-2 p-6'>
      <h1>Moogli Extranet</h1>
      <div className='inline-flex space-x-1'>
        <Button onClick={onRegisterButtonClick} variant='primary'>
          Register
        </Button>
        <Button onClick={onLoginButtonClick} variant='tertiary'>
          Login
        </Button>
      </div>
      <Outlet />
    </header>
  );
}

export default UnauthenticatedApp;
