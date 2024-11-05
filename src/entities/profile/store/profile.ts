import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProfile } from '../types';
import { IProfileState } from './types';

export const useProfileStore = create<IProfileState>()(
  persist(
    (set, get) => ({
      profile: undefined as IProfile,
      setProfile: (profile: IProfile) => {
        set({ profile: profile });
      },
      clearProfile: () => {
        set({ profile: undefined });
      },
      getProfile: () => get().profile,
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
