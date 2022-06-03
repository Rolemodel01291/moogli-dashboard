import { client } from '@/utils/api-client';
import { app } from '@/utils/firebase';

import type { User } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  getAuth,
  getIdToken,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export type UserType = 'company' | 'municipality' | string;

export type TRegister = {
  email: string;
  password: string;
  username: string;
  type: UserType;
};

export type TLogin = {
  email: string;
  password: string;
};

const localStorageKey = '__moogli_token__';
const host =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_URL
    : 'http://localhost:3000';
const firebaseAuth = getAuth(app);

function getBearerToken() {
  return localStorage.getItem(localStorageKey);
}

function registerToDB(token: string, type: UserType | undefined) {
  return client<boolean>(`users/register?type=${type}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
}

function editUserAccountUsername(username: string, token: string = '') {
  return client<boolean>('users/username', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ username }),
  });
}

const postJWTTokenToServerForUser = async (
  user: User,
  isNewUser: boolean = false,
  userType?: UserType
) => {
  // if new user, generate refreshed JWT token and set it as the Auth Bearer Token
  if (isNewUser) {
    try {
      //1. Hit the register API with the old JWT token as the auth token
      const oldJWTtoken = await getIdToken(user, true);
      localStorage.setItem(localStorageKey, oldJWTtoken);

      const response = await registerToDB(oldJWTtoken, userType);

      if (response) {
        //2. once registered, update the bearer token with the refreshed token
        const refreshedJwtToken = await getIdToken(user, true); // do force refresh by passing true as argument
        localStorage.setItem(localStorageKey, refreshedJwtToken);
        return refreshedJwtToken;
      }
      return oldJWTtoken;
    } catch {
      throw new Error("Couldn't register user");
    }
  }
  // if existing user, fetch the user JWT token and set it as the Auth Bearer Token
  else {
    const jwtToken = await getIdToken(user, true);
    localStorage.setItem(localStorageKey, jwtToken);
    return jwtToken;
  }
};

async function register({ email, password, username, type }: TRegister) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { user } = userCredential;
    const additionalUserInfo = getAdditionalUserInfo(userCredential);

    const token = await postJWTTokenToServerForUser(
      user,
      additionalUserInfo?.isNewUser,
      type
    );
    await updateProfile(user, { displayName: username });
    await editUserAccountUsername(username, token);
    await sendEmailVerification(user, { url: `${host}/register/verify-email` });
  } catch {
    throw new Error("Couldn't create user");
  }
}

async function login({ email, password }: TLogin) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { user } = userCredential;

    if (!user.emailVerified) throw new Error('Email not verified');

    const additionalUserInfo = getAdditionalUserInfo(userCredential);
    const token = await postJWTTokenToServerForUser(
      user,
      additionalUserInfo?.isNewUser
    );

    return { ...user, token };
  } catch {
    throw new Error('Incorrect password');
  }
}

function logout() {
  localStorage.removeItem(localStorageKey);
  return signOut(firebaseAuth);
}

export {
  firebaseAuth,
  getBearerToken,
  host,
  localStorageKey,
  login,
  logout,
  postJWTTokenToServerForUser,
  register,
};
