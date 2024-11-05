import { ICartProduct, IProduct, IProductsFilter } from '../types';
import { ICreatedAt, IPagination, ISorting, IUpdatatedAt } from 'src/shared/api';

export interface IOrderItem {
  id: string;
  quantity: number;
}

export interface ICartState {
  cart: ICartProduct[];
  removeItem: (id: string) => void;
  addToCart: (item: IProduct) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
  getProductQuantity: (id: string) => number;
  getTotalItems: () => number;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getOrderItems: () => IOrderItem[];
}

export interface IProductsState {
  products: IProduct[];
  paging: IPagination;
  isLoading: boolean;
  setProducts: (products: IProduct[], paging: IPagination) => void;
  addProducts: (products: IProduct[], paging: IPagination) => void;
  clearProducts: () => void;
  getProducts: () => IProduct[];
  getPaging: () => IPagination;
  setIsLoading: (loading: boolean) => void;
}

export interface IAdminProductsState extends IProductsState {
  addProduct: (order: IProduct) => void;
  modProduct: (order: IProduct) => void;
  delProduct: (id: string) => void;
  getProduct: (id: string) => IProduct;
}

export interface IFilterState {
  name?: string;
  ids?: string[];
  categoryIds?: string[];
  pagination?: IPagination;
  createdAt?: ICreatedAt;
  updatatedAt?: IUpdatatedAt;
  sorting?: ISorting;
  setName: (name: string) => void;
  setIds: (ids: string[]) => void;
  setCategoryIds: (categoryIds: string[]) => void;
  setPagination: (pagination: IPagination) => void;
  setCreatedAt: (createdAt: ICreatedAt) => void;
  setUpdatatedAt: (updatatedAt: IUpdatatedAt) => void;
  setSorting: (sorting: ISorting) => void;
  setDefaultFilter: () => void;
  getFilter: () => IProductsFilter;
}
