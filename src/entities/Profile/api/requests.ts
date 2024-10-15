import axios from 'axios';
import { API_URL } from 'src/shared/api/settings';
import { IProfile } from '../model/profile';

export interface IProfileApi extends IProfile {
  commandId: string;
}

export const getProfile = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const result = await axios.get(`${API_URL}/profile`, config);
  return result.data;
};
