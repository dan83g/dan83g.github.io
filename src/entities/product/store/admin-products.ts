import { create } from 'zustand';
import { IAdminProductsState } from './types';
import { IProduct } from '../types';
import { IPagination } from '@shared/api';

export const useAdminProductsStore = create<IAdminProductsState>()((set, get) => ({
  products: [] as IProduct[],
  paging: { pageNumber: 1 } as IPagination,
  isLoading: false as boolean,
  setProducts: (products: IProduct[]) => {
    set({ products: products });
  },
  addProducts: (products: IProduct[], paging: IPagination) => {
    const newProducts = get().products.concat(products);
    set({ products: newProducts });
    set({ paging: paging });
  },
  addProduct: (product: IProduct) => {
    const newProducts = get().products.concat(product);
    set({ products: newProducts });
  },
  modProduct: (product: IProduct) => {
    const newProducts = get().products.map((i) => (i.id === product.id ? Object.assign(i, product) : i));
    set({ products: newProducts });
  },
  delProduct: (id: string) => {
    const newProducts = get().products.filter((i) => i.id !== id);
    set({ products: newProducts });
  },
  clearProducts: () => {
    set({ products: [] });
    set({ paging: { pageNumber: 1, total: 0 } as IPagination });
  },
  setIsLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  getProduct: (id: string) => get().products.find((p) => p.id === id),
  getProducts: () => get().products,
  getPaging: () => get().paging,
}));
