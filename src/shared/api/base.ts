import { API_URL } from '@shared/config';
import { APIError } from './errors/ApiError';
import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

class ApiInstance {
  private axios: AxiosInstance;

  constructor(token?: string) {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
      return response.data;
    } catch (error) {
      throw APIError.getApiError(error as AxiosError);
    }
  }

  async post<T, R>(endpoint: string, data: R, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.post(endpoint, data, options);
      return response.data;
    } catch (error) {
      throw APIError.getApiError(error as AxiosError);
    }
  }

  async put<T, R>(endpoint: string, data: R, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.put(endpoint, data, options);
      return response.data;
    } catch (error) {
      throw APIError.getApiError(error as AxiosError);
    }
  }

  async patch<T, R>(endpoint: string, data: R, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.patch(endpoint, data, options);
      return response.data;
    } catch (error) {
      throw APIError.getApiError(error as AxiosError);
    }
  }

  async delete<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.delete(endpoint, options);
      return response.data;
    } catch (error) {
      throw APIError.getApiError(error as AxiosError);
    }
  }
}

export const apiInstance = (token?: string) => new ApiInstance(token);
