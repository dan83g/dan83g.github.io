import { ICreatedAt, IUpdatatedAt, IPagination, ISorting } from '@shared/api';

export interface ICategory {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryRequest {
  name: string;
  photo?: string;
}

export interface ICategoriesFilter {
  name?: string;
  ids?: string[];
  pagination?: IPagination;
  createdAt?: ICreatedAt;
  updatatedAt?: IUpdatatedAt;
  sorting?: ISorting;
}

export interface ICategoriesResponse {
  data: ICategory[];
  pagination: IPagination;
  sorting: ISorting;
}

export const isCategory = (category: unknown): category is ICategory => {
  const tempCategory = category as ICategory;
  return (
    Object.hasOwn(tempCategory, 'id') &&
    Object.hasOwn(tempCategory, 'name') &&
    Object.hasOwn(tempCategory, 'createdAt') &&
    Object.hasOwn(tempCategory, 'updatedAt')
  );
};

export const isCategoriesResponse = (response: unknown): response is ICategoriesResponse => {
  const categoriesResponse = response as ICategoriesResponse;
  return (
    Object.hasOwn(categoriesResponse, 'data') &&
    Object.hasOwn(categoriesResponse, 'pagination') &&
    Object.hasOwn(categoriesResponse, 'sorting') &&
    Array.isArray(categoriesResponse.data) &&
    categoriesResponse.data.every((category) => isCategory(category))
  );
};
