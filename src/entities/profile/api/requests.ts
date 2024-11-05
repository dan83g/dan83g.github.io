import { apiInstance } from '@shared/api';
import { IProfile, isProfile } from 'src/entities/Profile/types';
import { APIError } from 'src/shared/api/errors/ApiError';

export const URL_PROFILE = '/profile';

export const getProfile = async (token: string): Promise<IProfile> => {
  const responseData = await apiInstance(token).get<IProfile>(URL_PROFILE);
  if (isProfile(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
