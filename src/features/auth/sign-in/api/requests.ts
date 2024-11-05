import { apiInstance } from '@shared/api';
import { ISignInRequest, ISignInResponse, isSignInResponse } from './types';
import { API_COMMAND_ID } from 'src/shared/config/api';
import { APIError } from 'src/shared/api/errors/ApiError';

export const URL_SIGN_IN = '/signin';

export const signIn = async (email: string, password: string): Promise<ISignInResponse> => {
  const payload = {
    email,
    password,
    commandId: API_COMMAND_ID,
  } as ISignInRequest;
  const responseData = await apiInstance().post<ISignInResponse, ISignInRequest>(URL_SIGN_IN, payload);
  if (!isSignInResponse(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
