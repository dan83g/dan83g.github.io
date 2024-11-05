import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ITokenState } from './types';

export const useTokentStore = create<ITokenState>()(
  persist(
    (set, get) => ({
      token: undefined as string,
      setToken: (token: string) => {
        set({ token: token });
      },
      clearToken: () => {
        set({ token: undefined });
      },
      getToken: () => get().token,
    }),
    {
      name: 'token-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
