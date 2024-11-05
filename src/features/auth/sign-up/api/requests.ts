import { apiInstance } from '@shared/api';
import { ISignUpRequest, ISignUpResponse, isSignUpResponse } from './types';
import { API_COMMAND_ID } from 'src/shared/config/api';
import { APIError } from 'src/shared/api/errors/ApiError';

export const URL_SIGN_UP = '/signup';

export const signUp = async (email: string, password: string): Promise<ISignUpResponse> => {
  const data = {
    email,
    password,
    commandId: API_COMMAND_ID,
  } as ISignUpRequest;
  const responseData = await apiInstance().post<ISignUpResponse, ISignUpRequest>(URL_SIGN_UP, data);
  if (isSignUpResponse(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
