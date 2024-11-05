import { IProfile } from '../types';

export interface IProfileState {
  profile?: IProfile;
  setProfile(profile: IProfile): void;
  getProfile: () => void;
  clearProfile: () => void;
}
