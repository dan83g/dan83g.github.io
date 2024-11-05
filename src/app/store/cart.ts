import { createSlice } from '@reduxjs/toolkit';
import { ProductInCart } from 'src/entities/ProductCard/types';
import { RootState } from './store';

const cartSlice = createSlice({
  name: 'cart',
  initialState: localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart')) as ProductInCart[]) : [],
  reducers: {
    addProduct: (state, { payload: product }) => {
      const existingProduct = state.find((p) => p.id === product.id);
      if (existingProduct) {
        if (product.count === 0) {
          return state.filter((p) => p.id !== product.id);
        }
        existingProduct.count = product.count;
      } else {
        state.push(product);
      }
    },
    delProduct: (state, { payload: id }) => {
      return state.filter((p) => p.id !== id);
    },
  },
});
export const cartSelectors = {
  get: (state: RootState): RootState['cart'] => {
    return state.cart;
  },
};
export const cart = cartSlice.reducer;
export const cartActions = cartSlice.actions;
