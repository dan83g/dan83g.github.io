import { IProfile, isProfile } from '@entities/profile';

export interface ISignInRequest {
  email: string;
  password: string;
  commandId: string;
}

export interface ISignInResponse {
  token: string;
  profile: IProfile;
}

export const isSignInResponse = (response: unknown): response is ISignInResponse => {
  const signInResponse = response as ISignInResponse;
  return (
    Object.hasOwn(signInResponse, 'token') &&
    Object.hasOwn(signInResponse, 'profile') &&
    isProfile(signInResponse.profile)
  );
};
