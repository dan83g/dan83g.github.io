import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'src/pages/Navigation/ProtectedRoute';
import { ProtectedAdminRoute } from 'src/pages/Navigation/ProtectedAdminRoute';
import { Profile } from 'src/pages/Profile/Profile';
import { Cart } from 'src/pages/Cart/Cart';
import { Product } from 'src/pages/Product/Product';
import { Home } from 'src/pages/Home/Home';
import { NotFound } from 'src/pages/NotFound/NotFound';
import { Auth } from 'src/pages/Auth/Auth';

export const Routing: FC = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route
      path="profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="product"
      element={
        <ProtectedAdminRoute>
          <Product visible={true} />
        </ProtectedAdminRoute>
      }
    />
    <Route path="auth" element={<Auth visible={true} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
