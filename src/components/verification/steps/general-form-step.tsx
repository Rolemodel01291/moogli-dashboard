import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { InputGroup, InputIcon, InputText } from '@/components/ui/forms';

import { useVerification } from '../context';

export default function GeneralFormStep() {
  const {
    name,
    website,
    address,
    registrationNumber,
    nextStep,
    handleValueChange,
  } = useVerification();
  const [formValidation, setFormValidation] = useState({
    website: false,
    registrationNumber: false,
  });

  const websiteValidate = useCallback(() => {
    if (website === '') return;
    if (
      website.match(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
      )
    ) {
      setFormValidation((prevState) => ({
        ...prevState,
        website: false,
      }));
    } else {
      setFormValidation((prevState) => ({
        ...prevState,
        website: true,
      }));
    }
  }, [website]);

  const registrationNumberValidate = useCallback(() => {
    if (registrationNumber === '') return;
    if (registrationNumber.match(/^[0-9]{8}$/)) {
      setFormValidation((prevState) => ({
        ...prevState,
        registrationNumber: false,
      }));
    } else {
      setFormValidation((prevState) => ({
        ...prevState,
        registrationNumber: true,
      }));
    }
  }, [registrationNumber]);

  useEffect(() => {
    websiteValidate();
  }, [website, websiteValidate]);

  useEffect(() => {
    registrationNumberValidate();
  }, [registrationNumber, registrationNumberValidate]);

  const allValidated =
    name !== '' &&
    website !== '' &&
    address !== '' &&
    registrationNumber !== '' &&
    !formValidation.website &&
    !formValidation.registrationNumber;

  return (
    <>
      <div className='mb-[50px]'>
        <div className='mb-[50px] flex flex-col'>
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
            name='name'
            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
            placeholder='Official Company Name'
            value={name}
          />
          <InputGroup className='w-full'>
            {formValidation.website && (
              <InputIcon inputSize='lg' isError={formValidation.website} />
            )}
            <InputText
              inputSize='lg'
              name='website'
              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
              placeholder='Website'
              value={website}
            />
          </InputGroup>
          {formValidation.website && (
            <p className='pl-6 text-caption text-semantic-negative2-500'>
              This website doesn&apos;t exist. Please try another one.
            </p>
          )}
          <InputText
            inputSize='lg'
            name='address'
            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
            placeholder='Main office address'
            value={address}
          />
          <InputGroup className='w-full'>
            {formValidation.registrationNumber && (
              <InputIcon
                inputSize='lg'
                isError={formValidation.registrationNumber}
              />
            )}
            <InputText
              inputSize='lg'
              name='registrationNumber'
              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
              placeholder='Registration number'
              value={registrationNumber}
            />
          </InputGroup>
          {formValidation.registrationNumber && (
            <p className='pl-6 text-caption text-semantic-negative2-500'>
              This registration number is not a valid. Please try another one.
            </p>
          )}
        </form>
      </div>
      <div className='flex flex-col justify-center space-y-3'>
        <div className='mb-4 flex items-center justify-center space-x-2'>
          <span className='h-[6px] w-6 rounded bg-brand-main-500' />
          <span className='h-[6px] w-[6px] rounded bg-neutrals-40' />
        </div>
        <Button
          block
          className='font-normal'
          disabled={!allValidated}
          onClick={nextStep}
          size='lg'
          variant='primary'
        >
          Continue
        </Button>
      </div>
    </>
  );
}
