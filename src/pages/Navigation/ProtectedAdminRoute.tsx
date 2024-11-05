/* eslint-disable import/named */
import React, { FC } from 'react';
import { useProfileSelector } from 'src/app/store/profile';
import { Restricted } from '../Restricted/Restricted';
import { useTokentStore } from 'src/entities/token';

export interface IProtectedAdminRoute {
  children: React.ReactNode;
}

export const ProtectedAdminRoute: FC<IProtectedAdminRoute> = ({ children }) => {
  const { token } = useTokentStore();
  const profile = useProfileSelector((state) => state.profile.profile);
  if (token && profile?.isAdmin) return <>{children}</>;
  return <Restricted />;
};
