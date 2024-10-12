import { createSlice } from '@reduxjs/toolkit';

const initializedSlice = createSlice({
  name: 'initialized',
  initialState: {
    init: false,
  },
  reducers: {
    init: (state) => {
      state.init = true;
    },
  },
});

export const initializedActions = initializedSlice.actions;
export const initialized = initializedSlice.reducer;
