import { create } from 'zustand';
import { IFilterState } from './types';
import { IProductsFilter } from '../types';
import { IPagination, ICreatedAt, IUpdatatedAt, ISorting } from '@shared/api';
import { API_PAGE_SIZE } from '@shared/config';

export const useProductsFilterStore = create<IFilterState>()((set, get) => ({
  name: undefined,
  ids: undefined,
  categoryIds: undefined,
  createdAt: undefined,
  updatatedAt: undefined,
  pagination: { pageNumber: 1, pageSize: API_PAGE_SIZE },
  sorting: { type: 'ASC', field: 'id' },
  setName: (name: string) => {
    set({ name: name ?? undefined });
  },
  setIds: (ids: string[]) => {
    set({ ids: ids ?? undefined });
  },
  setCategoryIds: (categoryIds: string[]) => {
    set({ categoryIds: categoryIds ?? undefined });
  },
  setPagination: (pagination: IPagination) => {
    set({ pagination: pagination ?? undefined });
  },
  setCreatedAt: (createdAt: ICreatedAt) => {
    set({ createdAt: createdAt ?? undefined });
  },
  setUpdatatedAt: (updatatedAt: IUpdatatedAt) => {
    set({ updatatedAt: updatatedAt ?? undefined });
  },
  setSorting: (sorting: ISorting) => {
    set({ sorting: sorting ?? undefined });
  },
  setDefaultFilter: () => {
    set({
      pagination: { pageNumber: 1, pageSize: API_PAGE_SIZE },
      sorting: { type: 'ASC', field: 'id' },
    });
  },
  getFilter: () => {
    return {
      ...(get().name ? { name: get().name } : {}),
      ...(get().ids ? { ids: get().ids } : {}),
      ...(get().categoryIds ? { categoryIds: get().categoryIds } : {}),
      ...(get().pagination ? { pagination: get().pagination } : {}),
      ...(get().createdAt ? { createdAt: get().createdAt } : {}),
      ...(get().updatatedAt ? { updatatedAt: get().updatatedAt } : {}),
      ...(get().sorting ? { sorting: get().sorting } : {}),
    } as IProductsFilter;
  },
}));
