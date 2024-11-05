import { AxiosError, isAxiosError } from 'axios';
import { IApiError, IServerError, IServerErrorExtension } from './types';

export const isIServerErrorExtension = (ext: unknown): ext is IServerErrorExtension =>
  Object.hasOwn(ext as IServerErrorExtension, 'code');

export const isIServerError = (error: unknown): error is IServerError => {
  const tempError = error as IServerError;
  return (
    Object.hasOwn(tempError, 'message') &&
    Object.hasOwn(tempError, 'extensions') &&
    isIServerErrorExtension(tempError.extensions)
  );
};

export function isIApiError(apiError: unknown): apiError is IApiError {
  const tempApiError = apiError as IApiError;
  return (
    Object.hasOwn(tempApiError, 'errors') &&
    Array.isArray(tempApiError.errors) &&
    tempApiError.errors.every((error: IServerError) => isIServerError(error))
  );
}

export class APIError extends Error {
  code: string;

  constructor(message: string, code: string = undefined) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, APIError.prototype);
  }

  public static getApiError(error: AxiosError) {
    if (isAxiosError(error) && isIApiError(error?.response?.data as unknown)) {
      const errors = (error?.response?.data as IApiError).errors.map((err: IServerError) => err.message).join(', ');
      const code = (error?.response?.data as IApiError).errors.find(() => true).extensions.code;
      return new APIError(errors, code);
    } else {
      return new APIError(`Server error: ${error.response.status} (${error.response.statusText}`, 'ERR_UNKNOWN_ERROR');
    }
  }
}
