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
