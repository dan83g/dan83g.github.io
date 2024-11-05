/* eslint-disable import/named */
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { NavigationState } from './Navigation';
import { useTokentStore } from 'src/entities/token';

export interface IProtectedRoute {
  children: React.ReactNode;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const location = useLocation();
  const { token } = useTokentStore();
  if (token) return <>{children}</>;
  return <Navigate to="/auth" state={{ from: location } as NavigationState} replace />;
};
