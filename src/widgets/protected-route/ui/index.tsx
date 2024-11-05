/* eslint-disable import/named */
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { NavigationState } from '../types';
import { useTokentStore } from '@entities/token';
import { useProfileStore } from '@entities/profile';
import { ROUTES } from '@shared/config';
import { Restricted } from '@pages/restricted';

export interface IProtectedRoute {
  children: React.ReactNode;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const location = useLocation();
  const { token } = useTokentStore();
  if (token) return <>{children}</>;
  return <Navigate to={ROUTES.AUTH} state={{ from: location } as NavigationState} replace />;
};

export const ProtectedAdminRoute: FC<IProtectedRoute> = ({ children }) => {
  const { token } = useTokentStore();
  const { profile } = useProfileStore();
  if (token && profile?.isAdmin) return <>{children}</>;
  return <Restricted />;
};
