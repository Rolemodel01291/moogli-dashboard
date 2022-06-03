import { useClient } from '@/context/auth/auth-context';
import { client } from '@/utils/api-client';

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from 'react-query';

type TEmailResult = null | boolean | 'invalid';
type TUsernameResult = null | boolean | 'invalid';
type TSeenVerificationScreen = {
  data: boolean;
  error: boolean;
};

function validateEmail(text: string) {
  return text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

function validateUsername(text: string) {
  return text.match(/^[a-z0-9_.]+$/);
}

function useSeenVerificationScreen() {
  const http = useClient<TSeenVerificationScreen>();
  const result = useQuery<TSeenVerificationScreen>(
    'seen-verification-screen',
    () => http('users/seenverificationscreen'),
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    ...result,
    isSeenVerificationScreen: result.data?.data,
  };
}

function useSeeVerificationScreen(options?: UseMutationOptions) {
  const http = useClient();
  const queryClient = useQueryClient();

  return useMutation(
    () =>
      http('entities/register', {
        method: 'POST',
      }),
    {
      onSuccess: () =>
        queryClient.invalidateQueries('seen-verification-screen'),
      ...options,
    }
  );
}

function useEmailRegistered(email: string = '') {
  const result = useQuery<TEmailResult>(
    email,
    () => {
      if (!email) {
        return Promise.resolve(null);
      }
      if (!validateEmail(email)) {
        return client<boolean>(`users/isRegistered?email=${email}`).then(
          () => Promise.resolve('invalid'),
          () => Promise.resolve('invalid')
        );
      }
      return client<boolean>(`users/isRegistered?email=${email}`);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    ...result,
    isEmailRegistered: result.data,
  };
}

function useUsernameRegistered(username: string) {
  const result = useQuery<TUsernameResult>(
    username,
    () => {
      if (!username) {
        return Promise.resolve(null);
      }
      if (!validateUsername(username)) {
        return client<boolean>(
          `users/isUsernameRegistered?username=${username}`
        ).then(
          () => Promise.resolve('invalid'),
          () => Promise.resolve('invalid')
        );
      }
      return client<boolean>(`users/isUsernameRegistered?username=${username}`);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    ...result,
    isUsernameRegistered: result.data,
  };
}

export {
  useEmailRegistered,
  useSeenVerificationScreen,
  useSeeVerificationScreen,
  useUsernameRegistered,
};
