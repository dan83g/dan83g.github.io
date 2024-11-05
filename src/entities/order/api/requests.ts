import { apiInstance } from '@shared/api';
import {
  IOrder,
  isOrder,
  IOrdersFilters,
  IOrderRequest,
  IOrderCreate,
  IOrdersResponse,
  isOrdersResponse,
} from '../types';
import { APIError } from '@shared/api/errors/ApiError';

export const URL_ORDERS = '/orders  ';

export const getOrders = async (token: string, filters?: IOrdersFilters): Promise<IOrdersResponse[]> => {
  const responseData = await apiInstance(token).get<IOrdersResponse[]>(URL_ORDERS, { params: filters });
  if (!isOrdersResponse(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const createOrder = async (token: string, payload: IOrderCreate): Promise<IOrder> => {
  const responseData = await apiInstance(token).post<IOrder, IOrderCreate>(URL_ORDERS, payload);
  if (!isOrder(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const getOrder = async (token: string, id: string): Promise<IOrder> => {
  const responseData = await apiInstance(token).get<IOrder>(`${URL_ORDERS}/${id}`);
  if (!isOrder(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const deleteOrder = async (token: string, id: string): Promise<IOrder> => {
  const responseData = await apiInstance(token).delete<IOrder>(`${URL_ORDERS}/${id}`);
  if (!isOrder(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const updateOrder = async (token: string, id: string, payload: IOrderRequest): Promise<IOrder> => {
  const responseData = await apiInstance(token).put<IOrder, IOrderRequest>(`${URL_ORDERS}/${id}`, payload);
  if (!isOrder(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const patchOrder = async (token: string, id: string, payload: IOrderRequest): Promise<IOrder> => {
  const responseData = await apiInstance(token).patch<IOrder, IOrderRequest>(`${URL_ORDERS}/${id}`, payload);
  if (!isOrder(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
