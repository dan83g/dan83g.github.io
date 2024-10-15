import axios from 'axios';
import { API_URL } from 'src/shared/api/settings';
import { IProfile } from 'src/entities/Profile/model/profile';

const COMMAND_ID = '44d72666-a601-4561-8dba-f20b6a141768';

export interface SignUpBody {
  email: string;
  password: string;
  commandId: string;
}

export interface AuthResult {
  token: string;
  profile: IApiProfile;
}

interface IApiProfile extends Omit<IProfile, 'id'> {
  _id: string;
}

export const isApiProfile = (profile: unknown): profile is IApiProfile => {
  const tempProfile = profile as IApiProfile;
  return (
    Object.hasOwn(tempProfile, '_id') && Object.hasOwn(tempProfile, 'email') && Object.hasOwn(tempProfile, 'signUpDate')
  );
};

export const isAuthResult = (authResult: unknown): authResult is AuthResult => {
  const authResultTemp = authResult as AuthResult;
  return (
    Object.hasOwn(authResultTemp, 'token') &&
    Object.hasOwn(authResultTemp, 'profile') &&
    isApiProfile(authResultTemp.profile)
  );
};

export const apiProfileToProfile = (profile: IApiProfile): IProfile => {
  const { _id, ...prof } = profile;
  return { ...prof, id: _id } as IProfile;
};

export const registerSignUp = async (email: string, password: string) => {
  const payload = {
    email,
    password,
    commandId: COMMAND_ID,
  } as SignUpBody;
  const result = await axios.post(`${API_URL}/signup`, payload);
  return result.data;
};
