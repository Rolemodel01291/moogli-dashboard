import { Button, IconButton } from '@/components/ui/button';
import { InputText } from '@/components/ui/forms';
import { ArrowWideLeftBoldIcon } from '@/icons/bordered';
import { formatPhoneNumber } from '@/utils/helpers';
import { useRegisterEntity } from '@/utils/hooks/entity';

import { useVerification } from '../context';

import { useNavigate } from 'react-router-dom';

export default function ContactFormStep() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useRegisterEntity();
  const {
    name,
    website,
    address,
    registrationNumber,
    contactName,
    contactPhoneNumber,
    contactRole,
    previousStep,
    handleValueChange,
  } = useVerification();

  const onSendEntities = async () => {
    const values = {
      name,
      website,
      address,
      legal_id: registrationNumber,
      contact_name: contactName,
      contact_phone_number: contactPhoneNumber,
      contact_role: contactRole,
    };
    mutate(values, {
      onSuccess: () => navigate('/dashboard/verification'),
    });
  };

  const allValidated =
    contactName !== '' && contactPhoneNumber !== '' && contactRole !== '';

  return (
    <>
      <div>
        <div className='mb-[50px] flex flex-col'>
          <div className='relative'>
            <IconButton
              className='absolute left-0 text-neutrals-100'
              icon={ArrowWideLeftBoldIcon}
              onClick={previousStep}
              size='sm'
              variant='tertiary'
            />
          </div>
          <h1 className='mb-2 text-center text-title1 font-bold text-neutrals-400'>
            Verify Your Account
          </h1>
          <span className='text-center text-caption text-neutrals-100'>
            Fill out the information below.
          </span>
        </div>
        <form className='flex flex-col space-y-4'>
          <InputText
            inputSize='lg'
            name='contactName'
            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
            placeholder='Name and surename'
            value={contactName}
          />
          <InputText
            inputSize='lg'
            name='contactRole'
            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
            placeholder='Role with company'
            value={contactRole}
          />
          <InputText
            inputSize='lg'
            name='contactPhoneNumber'
            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
            placeholder='Phone number'
            value={formatPhoneNumber(contactPhoneNumber)}
          />
        </form>
      </div>
      <div className='mt-[50px] flex flex-col justify-center space-y-3'>
        <div className='mb-4 flex items-center justify-center space-x-2'>
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
          <span className='h-[6px] w-6 rounded bg-brand-main-500' />
        </div>
        <Button
          block
          className='font-normal'
          disabled={!allValidated}
          isLoading={isLoading}
          onClick={onSendEntities}
          size='lg'
          variant='primary'
        >
          Continue
        </Button>
      </div>
    </>
  );
}
