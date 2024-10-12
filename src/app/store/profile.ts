import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

const anonymousProfile: Profile = {
  id: '0',
  name: 'anonymous',
  login: 'anonymous@example.com',
  isAdmin: false,
};

const profiles: Profile[] = [
  {
    id: '1',
    name: 'admin',
    login: 'admin@example.com',
    password: '123',
    isAdmin: true,
  },
  {
    id: '2',
    name: 'user',
    login: 'user@example.com',
    password: '123',
    isAdmin: false,
  },
];

export interface Profile {
  id: string;
  name: string;
  login: string;
  password?: string;
  isAdmin: boolean;
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: localStorage.getItem('profile')
    ? (JSON.parse(localStorage.getItem('profile')) as Profile)
    : anonymousProfile,
  reducers: {
    setProfile: (state, { payload: login }) => {
      const userProfile =
        profiles.find((profile) => profile.login === login) ?? ({ login: login, isAdmin: false } as Profile);
      return userProfile;
    },
    clearProfile: () => {
      return anonymousProfile;
    },
  },
});

export const profileSelectors = {
  get: (state: RootState): RootState['profile'] => {
    return state.profile;
  },
};
export const profile = profileSlice.reducer;
export const profileActions = profileSlice.actions;
