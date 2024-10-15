export interface IApiError {
  errors: IServerError[];
}
export interface IServerError {
  message: string;
  extensions: IServerErrorExtension;
}
export interface IServerErrorExtension {
  code: string;
}

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
    tempApiError.errors.every((error) => isIServerError(error))
  );
}
