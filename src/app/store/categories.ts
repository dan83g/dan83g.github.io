import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';
import { ICategory } from 'src/entities/category';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [] as ICategory[],
  reducers: {
    setCategories: (_state, action: PayloadAction<ICategory[]>) => {
      return action.payload;
    },
    clear: () => [] as ICategory[],
  },
});

export const categoriesSelectors = {
  get: (state: RootState): RootState['categories'] => {
    return state.categories;
  },
};
export const useCategoriesSelector: TypedUseSelectorHook<RootState> = useSelector;
export const categories = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;
