import { create } from 'zustand';
import { ICategoriesState } from './types';
import { ICategory } from '../types';
import { IPagination } from '@shared/api';

export const useCategoriesStore = create<ICategoriesState>()((set, get) => ({
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
  clearCategories: () => {
    set({ categories: [] });
  },
  setIsLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));
