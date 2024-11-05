import { IProfile, isProfile } from 'src/entities/Profile/types';

export interface ISignUpRequest {
  email: string;
  password: string;
  commandId: string;
}

export interface ISignUpResponse {
  token: string;
  profile: IProfile;
}

export const isSignUpResponse = (response: unknown): response is ISignUpResponse => {
  const signUpResponse = response as ISignUpResponse;
  return (
    Object.hasOwn(signUpResponse, 'token') &&
    Object.hasOwn(signUpResponse, 'profile') &&
    isProfile(signUpResponse.profile)
  );
};
