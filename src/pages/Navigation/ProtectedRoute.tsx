/* eslint-disable import/named */
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTokenSelector } from 'src/app/store/token';
import { NavigationState } from './Navigation';

export interface IProtectedRoute {
  children: React.ReactNode;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const location = useLocation();
  const token = useTokenSelector((state) => state.token);
  if (token) return <>{children}</>;
  return <Navigate to="/auth" state={{ from: location } as NavigationState} replace />;
};
