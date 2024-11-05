import { IPagination } from '@shared/api';
import { IOrder } from '../types';

export interface IOrdersState {
  orders?: IOrder[];
  paging: IPagination;
  isLoading: boolean;
  setOrders: (orders: IOrder[]) => void;
  addOrders: (orders: IOrder[], paging: IPagination) => void;
  addOrder: (order: IOrder) => void;
  modOrder: (order: IOrder) => void;
  delOrder: (id: string) => void;
  clearOrders: () => void;
  setIsLoading: (loading: boolean) => void;
  getOrderTotalPrice: (order: IOrder) => number;
}
