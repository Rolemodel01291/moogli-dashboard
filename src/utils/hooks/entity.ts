import { useClient } from '@/context/auth/auth-context';
import { getFormUrlEncoded } from '@/utils/helpers';

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';

type TVerificationStatus = {
  data: {
    status: 0 | 1 | 2 | 3;
    comment: 'string';
  };
  error: boolean;
};

type TEntityRegistration = {
  name: string;
  legal_id: string;
  website: string;
  address: string;
  contact_name: string;
  contact_phone_number: string;
  contact_role: string;
};

function useVerificationStatus(options?: UseQueryOptions<TVerificationStatus>) {
  const client = useClient<TVerificationStatus>();

  const result = useQuery<TVerificationStatus>(
    'verification-status',
    () => {
      return client('entities/verification-result');
    },
    {
      ...options,
      refetchOnWindowFocus: false,
    }
  );

  return {
    ...result,
    verificationStatus: result.data?.data.status,
  };
}

function useRegisterEntity(
  options?: UseMutationOptions<boolean, Error, TEntityRegistration>
) {
  const client = useClient<boolean>();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, TEntityRegistration>(
    (values) => {
      const data = getFormUrlEncoded(values);

      return client('entities/register', {
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries('verification-status'),
      ...options,
    }
  );
}

export { useRegisterEntity, useVerificationStatus };
