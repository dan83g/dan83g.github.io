import { IProduct, isProduct } from '../product';
import { ICreatedAt, IUpdatatedAt, IPagination, ISorting } from '@shared/api';
import { IProfile } from '../profile';

export interface IOrder {
  id: string;
  products: IOrderProduct[];
  user: IProfile;
  status: OrderStatus;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface IOrderProduct {
  product: IProduct;
  quantity: number;
}

export enum OrderStatus {
  PendingConfirmation = 'pending_confirmation',
  Processing = 'processing',
  Packaging = 'packaging',
  WaitingForDelivery = 'waiting_for_delivery',
  InTransit = 'in_transit',
  Delivered = 'delivered',
  ReturnRequested = 'return_requested',
  OrderCancelled = 'order_cancelled',
}

export interface IOrdersFilters {
  productIds?: string[];
  userId?: string;
  ids?: string[];
  status?: OrderStatus;
  pagination?: IPagination;
  createdAt?: ICreatedAt;
  updatatedAt?: IUpdatatedAt;
  sorting?: ISorting;
}

export interface IOrdersResponse {
  data: IOrder[];
  pagination: IPagination;
  sorting: ISorting;
}

export interface IOrderCreate {
  products: Array<{
    id: string;
    quantity: number;
  }>;
  status?: OrderStatus;
}

export interface IOrderRequest {
  productIds?: string[];
  status?: OrderStatus;
}

export const isOrder = (order: unknown): order is IOrder => {
  const tempOrder = order as IOrder;
  return (
    Object.hasOwn(tempOrder, 'id') &&
    Object.hasOwn(tempOrder, 'user') &&
    Object.hasOwn(tempOrder, 'createdAt') &&
    Object.hasOwn(tempOrder, 'updatedAt') &&
    Object.hasOwn(tempOrder, 'status') &&
    Object.values(OrderStatus).includes(tempOrder.status) &&
    Object.hasOwn(tempOrder, 'products') &&
    tempOrder.products.every((p) => (p.product === null || isProduct(p.product)) && Object.hasOwn(p, 'quantity'))
  );
};

export const isOrderProduct = (orderProduct: unknown): orderProduct is IOrderProduct => {
  const tempOrderProduct = orderProduct as IOrderProduct;
  return (
    Object.hasOwn(tempOrderProduct, 'product') &&
    Object.hasOwn(tempOrderProduct, 'quantity') &&
    isProduct(tempOrderProduct.product)
  );
};

export const isOrdersResponse = (response: unknown): response is IOrdersResponse => {
  const ordersResponse = response as IOrdersResponse;
  return (
    Object.hasOwn(ordersResponse, 'data') &&
    Object.hasOwn(ordersResponse, 'pagination') &&
    Object.hasOwn(ordersResponse, 'sorting') &&
    Array.isArray(ordersResponse.data) &&
    ordersResponse.data.every((order) => isOrder(order))
  );
};
