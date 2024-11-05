import { create } from 'zustand';
import { IOrdersState } from './types';
import { IOrder } from '../types';
import { IPagination } from 'src/shared/api';

export const useAdminOrdersStore = create<IOrdersState>()((set, get) => ({
  orders: [] as IOrder[],
  paging: { pageNumber: 1 } as IPagination,
  isLoading: false as boolean,
  setOrders: (orders: IOrder[]) => {
    set({ orders: orders });
  },
  addOrders: (orders: IOrder[], paging: IPagination) => {
    const newOrders = get().orders.concat(orders);
    set({ orders: newOrders });
    set({ paging: paging });
  },
  addOrder: (order: IOrder) => {
    const newOrders = get().orders.concat(order);
    set({ orders: newOrders });
  },
  modOrder: (order: IOrder) => {
    const newOrders = get().orders.map((i) => (i.id === order.id ? Object.assign(i, order) : i));
    set({ orders: newOrders });
  },
  delOrder: (id: string) => {
    const newOrders = get().orders.filter((i) => i.id !== id);
    set({ orders: newOrders });
  },
  clearOrders: () => {
    set({ orders: [] });
  },
  setIsLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  getOrderTotalPrice: (order: IOrder) =>
    get()
      .orders.find((o) => o.id === order.id)
      ?.products.reduce((x: number, y) => x + (y.product ? y.product.price : 0) * y.quantity, 0),
}));
