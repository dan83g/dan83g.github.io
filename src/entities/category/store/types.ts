import { IPagination } from '@shared/api';
import { ICategory } from '../types';

export interface ICategoriesState {
  categories?: ICategory[];
  paging: IPagination;
  isLoading: boolean;
  setCategories: (categories: ICategory[]) => void;
  addCategories: (categories: ICategory[], paging: IPagination) => void;
  clearCategories: () => void;
  setIsLoading: (loading: boolean) => void;
}

export interface IAdminCategoriesState extends ICategoriesState {
  addCategory: (category: ICategory) => void;
  modCategory: (category: ICategory) => void;
  delCategory: (id: string) => void;
  getCategory: (id: string) => ICategory;
}
