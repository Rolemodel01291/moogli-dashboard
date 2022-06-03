import * as React from 'react';

enum Status {
  Idle = 'Idle',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Resolved = 'Resolved',
}

enum Action {
  Idle = 'Idle',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Resolved = 'Resolved',
  Reset = 'Reset',
}

interface IdleAction {
  type: Action.Idle;
}

interface PendingAction {
  type: Action.Pending;
}

interface ResolvedAction<TResult> {
  type: Action.Resolved;
  data: TResult;
}

interface RejectedAction<TError> {
  type: Action.Rejected;
  error: TError;
}

interface ResetAction<TResult, TError> {
  type: Action.Reset;
  initialState: AsyncState<TResult, TError>;
}

interface IdleState {
  status: Status.Idle;
  data: null;
  error: null;
  isIdle: true;
  isLoading: false;
  isError: false;
  isSuccess: false;
}

interface PendingState {
  status: Status.Pending;
  data: null;
  error: null;
  isIdle: false;
  isLoading: true;
  isError: false;
  isSuccess: false;
}

interface ResolvedState<TResult> {
  status: Status.Resolved;
  data: TResult;
  error: null;
  isIdle: false;
  isLoading: false;
  isError: false;
  isSuccess: true;
}

interface RejectedState<TError> {
  status: Status.Rejected;
  data: null;
  error: TError;
  isIdle: false;
  isLoading: false;
  isError: true;
  isSuccess: false;
}

type AsyncAction<TResult, TError> =
  | PendingAction
  | IdleAction
  | ResolvedAction<TResult>
  | RejectedAction<TError>
  | ResetAction<TResult, TError>;

type AsyncState<TResult, TError> =
  | IdleState
  | PendingState
  | ResolvedState<TResult>
  | RejectedState<TError>;

interface BooleanBase {
  isIdle: false;
  isLoading: false;
  isError: false;
  isSuccess: false;
}

const Booleans: BooleanBase = {
  isIdle: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

function asyncReducer<TResult = unknown, TError = unknown>(
  state: AsyncState<TResult, TError>,
  action: AsyncAction<TResult, TError>
): AsyncState<TResult, TError> {
  switch (action.type) {
    case Action.Idle:
      return {
        ...Booleans,
        status: Status.Idle,
        data: null,
        error: null,
        isIdle: true,
      };
    case Action.Pending:
      return {
        ...Booleans,
        status: Status.Pending,
        data: null,
        error: null,
        isLoading: true,
      };
    case Action.Rejected:
      return {
        ...Booleans,
        status: Status.Rejected,
        data: null,
        error: action.error,
        isError: true,
      };
    case Action.Resolved:
      return {
        ...Booleans,
        status: Status.Resolved,
        data: action.data,
        error: null,
        isSuccess: true,
      };
    case Action.Reset:
      return { ...action.initialState };
    default:
      return state;
  }
}

function useSafeDispatch<TResult, TError>(
  dispatch: React.Dispatch<AsyncAction<TResult, TError>>
) {
  const mounted = React.useRef<boolean>(false);

  React.useLayoutEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (args: AsyncAction<TResult, TError>) =>
      mounted.current ? dispatch(args) : undefined,
    [dispatch]
  );
}

const defaultState: IdleState = {
  ...Booleans,
  status: Status.Idle,
  data: null,
  error: null,
  isIdle: true,
};

interface A<TResult, TError> {
  run: (promise: Promise<TResult>) => Promise<TResult>;
  setData: (data: TResult) => void;
  setError: (error: TError) => void;
  reset: () => void;
}

type IdleResponse<TResult, TError> = A<TResult, TError> & IdleState;

type PendingResponse<TResult, TError> = A<TResult, TError> & PendingState;

type RejectedResponse<TResult, TError> = A<TResult, TError> &
  ResolvedState<TResult>;

type ResolvedResponse<TResult, TError> = A<TResult, TError> &
  RejectedState<TError>;

type UseAsyncResponse<TResult, TError> =
  | IdleResponse<TResult, TError>
  | PendingResponse<TResult, TError>
  | RejectedResponse<TResult, TError>
  | ResolvedResponse<TResult, TError>;

function useAsync<TResult, TError>(
  initialState: AsyncState<TResult, TError> = defaultState
): UseAsyncResponse<TResult, TError> {
  const initialStateRef = React.useRef<AsyncState<TResult, TError>>({
    ...defaultState,
    ...initialState,
  });

  const [state, unSafeDispatch] = React.useReducer(
    (
      prevState: AsyncState<TResult, TError>,
      action: AsyncAction<TResult, TError>
    ) => asyncReducer<TResult, TError>(prevState, action),
    initialStateRef.current,
    () => initialStateRef.current
  );

  const dispatch = useSafeDispatch(unSafeDispatch);

  const setData = React.useCallback(
    (data: TResult) => dispatch({ type: Action.Resolved, data }),
    [dispatch]
  );

  const setError = React.useCallback(
    (error: TError) => dispatch({ type: Action.Rejected, error }),
    [dispatch]
  );

  const reset = React.useCallback(
    () =>
      dispatch({ type: Action.Reset, initialState: initialStateRef.current }),
    [dispatch]
  );

  const run = React.useCallback(
    (promise: Promise<TResult>) => {
      // if (!(await promise)) {
      //   throw new Error(
      //     "The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?"
      //   )
      // }

      dispatch({ type: Action.Pending });

      return promise.then(
        (data: TResult) => {
          dispatch({ type: Action.Resolved, data });
          return data;
        },
        (error: TError) => {
          dispatch({ type: Action.Rejected, error });
          return Promise.reject(error);
        }
      );
    },
    [dispatch]
  );

  return {
    ...state,
    setData,
    setError,
    run,
    reset,
  };
}

export { useAsync };
