import { create } from 'zustand';
import { IProductsState } from './types';
import { IProduct } from '../types';
import { IPagination } from '@shared/api';

export const useProductsStore = create<IProductsState>()((set, get) => ({
  products: [] as IProduct[],
  paging: { pageNumber: 1 } as IPagination,
  isLoading: false as boolean,
  setProducts: (products: IProduct[], paging: IPagination) => {
    set({ products: products, paging: paging });
  },
  addProducts: (products: IProduct[], paging: IPagination) => {
    const newProducts = get().products.concat(products);
    set({ products: newProducts, paging: paging });
  },
  clearProducts: () => {
    set({ products: [] });
    set({ paging: { pageNumber: 1, total: 0 } as IPagination });
  },
  setIsLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  getProducts: () => get().products,
  getPaging: () => get().paging,
}));
