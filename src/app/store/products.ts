import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product, createRandomProducts } from 'src/entities/ProductCard/types';

const PRODUCTS_PER_PAGE = 20;

const productsSlice = createSlice({
  name: 'products',
  initialState: createRandomProducts(PRODUCTS_PER_PAGE) as Product[],
  reducers: {
    addNext: (state) => {
      return state.concat(createRandomProducts(PRODUCTS_PER_PAGE));
    },
    clear: () => [],
  },
});

export const productsSelectors = {
  get: (state: RootState): RootState['products'] => {
    return state.products;
  },
};
export const products = productsSlice.reducer;
export const productsActions = productsSlice.actions;
