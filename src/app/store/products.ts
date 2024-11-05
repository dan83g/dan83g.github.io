import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';
import { IProduct, IProductsResponse } from 'src/entities/product';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as IProduct[],
    pageNumber: 1,
  },
  reducers: {
    addNext: (state, action: PayloadAction<IProductsResponse>) => {
      state.products = state.products.concat(action.payload.data);
      state.pageNumber = action.payload.pagination.pageNumber;
    },
    clear: (state) => {
      state.products = [] as IProduct[];
      state.pageNumber = 1;
    },
  },
});

export const productsSelectors = {
  get: (state: RootState): RootState['products'] => {
    return state.products;
  },
};
export const useProductsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const products = productsSlice.reducer;
export const productsActions = productsSlice.actions;
