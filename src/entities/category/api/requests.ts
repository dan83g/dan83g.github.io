import { apiInstance, getApiParameters } from '@shared/api';
import {
  isCategoriesResponse,
  ICategoriesResponse,
  ICategoriesFilter,
  ICategory,
  ICategoryRequest,
  isCategory,
} from '../types';
import { APIError } from '@shared/api/errors/ApiError';

export const URL_CATEGORIES = '/categories';


export const getCategories = async (token: string, filters?: ICategoriesFilter): Promise<ICategoriesResponse> => {
  filters = <ICategoriesFilter>getApiParameters(filters);
  const responseData = await apiInstance(token).get<ICategoriesResponse[]>(URL_CATEGORIES, { params: filters });
  if (!isCategoriesResponse(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const createCategory = async (token: string, payload: ICategoryRequest): Promise<ICategory> => {
  const responseData = await apiInstance(token).post<ICategory, ICategoryRequest>(URL_CATEGORIES, payload);
  if (!isCategory(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const getCategory = async (token: string, id: string): Promise<ICategory> => {
  const responseData = await apiInstance(token).get<ICategory>(`${URL_CATEGORIES}/${id}`);
  if (!isCategory(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const deleteCategory = async (token: string, id: string): Promise<ICategory> => {
  const responseData = await apiInstance(token).delete<ICategory>(`${URL_CATEGORIES}/${id}`);
  if (!isCategory(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const updateCategory = async (token: string, id: string, payload: ICategoryRequest): Promise<ICategory> => {
  const responseData = await apiInstance(token).put<ICategory, ICategoryRequest>(`${URL_CATEGORIES}/${id}`, payload);
  if (!isCategory(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};

export const patchCategory = async (token: string, id: string, payload: ICategoryRequest): Promise<ICategory> => {
  const responseData = await apiInstance(token).patch<ICategory, ICategoryRequest>(`${URL_CATEGORIES}/${id}`, payload);
  if (!isCategory(responseData))
    throw new APIError('Server error: Unknown Response format', 'ERR_UNKNOWN_RESPONSE_FORMAT');
  return responseData;
};
