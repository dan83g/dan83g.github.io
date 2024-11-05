import { apiInstance } from '@shared/api';
import {
  IProfile,
  isProfile,
  isChangePasswordResponse,
  IChangePasswordRequest,
  IChangePasswordResponse,
  IUpdateProfileRequest,
} from '../types';
import { APIError } from 'src/shared/api/errors/ApiError';

export const URL_PROFILE = '/profile';
export const URL_CHANGE_PASSWORD = '/profile/change-password';

export const getProfile = async (token: string): Promise<IProfile> => {
  const responseData = await apiInstance(token).get<IProfile>(URL_PROFILE);
  if (isProfile(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const updateProfile = async (token: string, payload: IUpdateProfileRequest): Promise<IProfile> => {
  const responseData = await apiInstance(token).patch<IProfile, IUpdateProfileRequest>(URL_PROFILE, payload);
  if (!isProfile(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const changePassword = async (
  token: string,
  payload: IChangePasswordRequest
): Promise<IChangePasswordResponse> => {
  const responseData = await apiInstance(token).post<IChangePasswordResponse, IChangePasswordRequest>(
    URL_CHANGE_PASSWORD,
    payload
  );
  if (!isChangePasswordResponse(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
