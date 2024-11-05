export interface ITokenState {
  token?: string;
  setToken(token: string): void;
  clearToken: () => void;
  getToken: () => void;
}
