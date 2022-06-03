import { QueryCache } from 'react-query';

const apiURL = process.env.REACT_APP_API_URL;

async function client<T>(
  endpoint: string,
  {
    body,
    token,
    headers: customHeaders,
    ...customConfig
  }: RequestInit & { token?: string | null } = {}
): Promise<T> {
  const queryCache = new QueryCache();

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    body: body ?? undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': body ? 'application/json' : undefined,
      ...customHeaders,
    } as HeadersInit,
    ...customConfig,
  };

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        queryCache.clear();
        // await auth.logout()
        return Promise.reject(new Error('Please re-authenticate.'));
      }
      if (response.ok) {
        try {
          return await response.json();
        } catch {
          return { status: response.status };
        }
      } else {
        return Promise.reject(new Error('API error'));
      }
    });
}

export { client };
