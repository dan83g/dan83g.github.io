import { apiInstance, getApiParameters } from '@shared/api';
import { IProduct, isProduct, IProductRequest, IProductsFilter, IProductsResponse, isProductsResponse } from '../types';
import { APIError } from '@shared/api/errors/ApiError';

export const URL_PRODUCTS = '/products';

export const getProducts = async (token: string, filters?: IProductsFilter): Promise<IProductsResponse> => {
  filters = <IProductsFilter>getApiParameters(filters);
  const responseData = await apiInstance(token).get<IProductsResponse>(URL_PRODUCTS, { params: filters });
  if (!isProductsResponse(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const createProduct = async (token: string, payload: IProductRequest): Promise<IProduct> => {
  const responseData = await apiInstance(token).post<IProduct, IProductRequest>(URL_PRODUCTS, payload);
  if (!isProduct(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const getProduct = async (token: string, id: string): Promise<IProduct> => {
  const responseData = await apiInstance(token).get<IProduct>(`${URL_PRODUCTS}/${id}`);
  if (!isProduct(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const deleteProduct = async (token: string, id: string): Promise<IProduct> => {
  const responseData = await apiInstance(token).delete<IProduct>(`${URL_PRODUCTS}/${id}`);
  if (!isProduct(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const updateProduct = async (token: string, id: string, payload: IProductRequest): Promise<IProduct> => {
  const responseData = await apiInstance(token).put<IProduct, IProductRequest>(`${URL_PRODUCTS}/${id}`, payload);
  if (!isProduct(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const patchProduct = async (token: string, id: string, payload: IProductRequest): Promise<IProduct> => {
  const responseData = await apiInstance(token).patch<IProduct, IProductRequest>(`${URL_PRODUCTS}/${id}`, payload);
  if (!isProduct(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
