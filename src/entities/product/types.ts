import { ICategory } from '../category';
import { ICreatedAt, IUpdatatedAt, IPagination, ISorting } from '@shared/api';

export interface IProduct {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  commandId: string;
  category: ICategory;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IProductsFilter {
  name?: string;
  ids?: string[];
  categoryIds?: string[];
  pagination?: IPagination;
  createdAt?: ICreatedAt;
  updatatedAt?: IUpdatatedAt;
  sorting?: ISorting;
}

export type IAPIProductFilter = Record<keyof IProductsFilter, string>;

export interface IProductsResponse {
  data: IProduct[];
  pagination: IPagination;
  sorting: ISorting;
}

export interface IProductRequest {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
}

export const isProduct = (product: unknown): product is IProduct => {
  const tempProduct = product as IProduct;
  return (
    Object.hasOwn(tempProduct, 'id') &&
    Object.hasOwn(tempProduct, 'name') &&
    Object.hasOwn(tempProduct, 'price') &&
    Object.hasOwn(tempProduct, 'category') &&
    Object.hasOwn(tempProduct, 'createdAt') &&
    Object.hasOwn(tempProduct, 'updatedAt')
  );
};

export const isProductsResponse = (response: unknown): response is IProductsResponse => {
  const productsResponse = response as IProductsResponse;
  return (
    Object.hasOwn(productsResponse, 'data') &&
    Object.hasOwn(productsResponse, 'pagination') &&
    Object.hasOwn(productsResponse, 'sorting') &&
    Array.isArray(productsResponse.data) &&
    productsResponse.data.every((product) => isProduct(product))
  );
};
