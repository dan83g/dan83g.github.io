/* eslint-disable import/named */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './store';
import { IProfile, adminProfile } from 'src/entities/Profile/model/profile';
import { IRegisterFormValues } from 'src/features/forms/RegisterForm/RegisterForm';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: localStorage.getItem('profile') ? (JSON.parse(localStorage.getItem('profile')) as IProfile) : undefined,
    // profile: undefined,
    errorMessage: undefined,
    errorCode: undefined,
    isLoading: false,
    isProfileLoaded: false,
  },
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      const profile = action.payload;
      state.profile = adminProfile.email === profile.email ? adminProfile : profile;
      state.isProfileLoaded = true;
    },
    clearProfile: (state) => {
      state.profile = undefined;
      state.isProfileLoaded = false;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setErrorCode: (state, action: PayloadAction<string>) => {
      state.errorCode = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    doSagaAuth: (state, action: PayloadAction<IRegisterFormValues>) => {
      console.log(action.payload);
      state.isLoading = true;
      state.errorCode = undefined;
      state.errorMessage = undefined;
      state.isProfileLoaded = false;
    },
  },
});

export const profileSelectors = {
  get: (state: RootState): RootState['profile'] => {
    return state.profile;
  },
};
export const useProfileSelector: TypedUseSelectorHook<RootState> = useSelector;
export const profile = profileSlice.reducer;
export const profileActions = profileSlice.actions;
