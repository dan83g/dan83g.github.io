import { create } from 'zustand';
import { IAdminCategoriesState } from './types';
import { ICategory } from '../types';
import { IPagination } from '@shared/api';

export const useAdminCategoriesStore = create<IAdminCategoriesState>()((set, get) => ({
  categories: [] as ICategory[],
  paging: { pageNumber: 1 } as IPagination,
  isLoading: false as boolean,
  setCategories: (categories: ICategory[]) => {
    set({ categories: categories });
  },
  addCategories: (categories: ICategory[], paging: IPagination) => {
    const newCategories = get().categories.concat(categories);
    set({ categories: newCategories });
    set({ paging: paging });
  },
  addCategory: (category: ICategory) => {
    const newCategories = get().categories.concat(category);
    set({ categories: newCategories });
  },
  modCategory: (category: ICategory) => {
    const newCategories = get().categories.map((c) => (c.id === category.id ? Object.assign(c, category) : c));
    set({ categories: newCategories });
  },
  delCategory: (id: string) => {
    const newCategories = get().categories.filter((c) => c.id !== id);
    set({ categories: newCategories });
  },
  clearCategories: () => {
    set({ categories: [] });
  },
  setIsLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  getCategory: (id: string) => get().categories.find((c) => c.id === id),
}));
