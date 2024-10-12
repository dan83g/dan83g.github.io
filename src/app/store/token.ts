import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { RootState } from '.';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    generate: () => v4(),
    clear: () => null,
  },
});

export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => {
    return state.token;
  },
};
export const token = tokenSlice.reducer;
export const tokenActions = tokenSlice.actions;
