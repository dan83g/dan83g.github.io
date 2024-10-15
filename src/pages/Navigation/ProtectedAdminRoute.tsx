/* eslint-disable import/named */
import React, { FC } from 'react';
import { useProfileSelector } from 'src/app/store/profile';
import { useTokenSelector } from 'src/app/store/token';
import { Restricted } from '../Restricted/Restricted';

export interface IProtectedAdminRoute {
  children: React.ReactNode;
}

export const ProtectedAdminRoute: FC<IProtectedAdminRoute> = ({ children }) => {
  const token = useTokenSelector((state) => state.token);
  const profile = useProfileSelector((state) => state.profile.profile);
  if (token && profile?.isAdmin) return <>{children}</>;
  return <Restricted />;
};

// export const ProtectedAdminRoute: FC<IProtectedAdminRoute> = ({ children }) => {
//   const location = useLocation();
//   const profile = useProfileSelector((state) => state.profile.profile);
//   const token = useTokenSelector((state) => state.token);
//   if (token && profile?.isAdmin) return <>{children}</>;
//   return <Navigate to="/auth" state={{ from: location } as NavigationState} replace />;
// };
