import { createSlice } from '@reduxjs/toolkit';
import { ProductInCart } from 'src/entities/ProductCard/types';
import { RootState } from '.';

const cartSlice = createSlice({
  name: 'cart',
  initialState: localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart')) as ProductInCart[]) : [],
  reducers: {
    addProduct: (state, { payload: product }) => {
      const isExists = Boolean(state.find((p) => p.id === product.id));
      if (isExists) {
        const tempState = state.slice();
        tempState.map((p: ProductInCart) => {
          if (p.id === product.id) {
            if (product.count === 0) {
              p = undefined;
            } else {
              p.count = product.count;
            }
          }
        });
        state = tempState.filter((p) => p !== undefined);
      } else {
        state.push(product);
        return state;
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
