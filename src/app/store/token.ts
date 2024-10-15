/* eslint-disable import/named */
import { createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { v4 } from 'uuid';
import { RootState } from './store';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    generate: () => v4(),
    setToken: (state, { payload: token }) => token,
    clear: () => null,
  },
});

export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => {
    return state.token;
  },
};
export const useTokenSelector: TypedUseSelectorHook<RootState> = useSelector;
export const token = tokenSlice.reducer;
export const tokenActions = tokenSlice.actions;
