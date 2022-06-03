import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { AlertCircleIcon, CheckCircleIcon } from '@/icons';
import LoadingWaveDark from '@/styles/lottie-files/loading-wave-dark.json';
import {
  useSeenVerificationScreen,
  useSeeVerificationScreen,
} from '@/utils/hooks/user';

import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';

interface CheckingDialogProps {
  status: 0 | 1 | 2 | 3 | undefined;
}

export default function CheckingDialog({ status }: CheckingDialogProps) {
  const navigate = useNavigate();
  const { isSeenVerificationScreen } = useSeenVerificationScreen();
  const { mutate } = useSeeVerificationScreen({
    onSuccess: () => navigate('/dashboard'),
  });

  useEffect(() => {
    if (isSeenVerificationScreen) {
      navigate('/dashboard');
    }
  }, [isSeenVerificationScreen, navigate]);

  const onClickButton = () => {
    if (status === 2) {
      mutate();
    }
    navigate('/dashboard');
  };

  return (
    <div className='my-8 inline-flex min-h-[359px] w-[528px] flex-col justify-between rounded-[40px] bg-neutrals-0 p-[50px] text-left align-middle'>
      <div className='mb-[50px] flex flex-col'>
        <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
          {status === 0 || status === 1
            ? 'We are checking...'
            : status === 2
            ? 'Your account is ready!'
            : 'Verification failed'}
        </h1>
        <span className='text-center text-caption text-neutrals-100'>
          {status === 0 || status === 1 ? (
            <>
              This process could take up to 1 day.
              <br /> We will inform you as soon as possible!
            </>
          ) : status === 2 ? (
            <>
              We have verified your account,
              <br /> all the details provided were correct.
            </>
          ) : (
            <>
              We have sent you an email with the reason
              <br />
              and details to check.
            </>
          )}
        </span>
      </div>
      {status === 0 || status === 1 ? (
        <Lottie
          height='auto'
          isClickToPauseDisabled
          options={{
            autoplay: true,
            animationData: LoadingWaveDark,
            loop: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width={120}
        />
      ) : status === 2 ? (
        <div className='mx-auto text-brand-main-500'>
          <CheckCircleIcon fill='currentColor' height={150} width={150} />
        </div>
      ) : (
        <div className='mx-auto text-semantic-negative2-500'>
          <AlertCircleIcon fill='currentColor' height={150} width={150} />
        </div>
      )}

      {(status === 2 || status === 3) && (
        <div className='mt-[50px] flex flex-col justify-center space-y-3'>
          <Button block onClick={onClickButton} size='lg' variant='subtle'>
            {status === 2 ? 'Go to Dashboard' : 'Try again'}
          </Button>
        </div>
      )}
    </div>
  );
}
