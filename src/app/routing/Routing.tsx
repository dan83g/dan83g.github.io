import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'src/pages/Navigation/ProtectedRoute';
// import { ProtectedAdminRoute } from 'src/pages/Navigation/ProtectedAdminRoute';
import { CategoryPage } from 'src/pages/category';
import { Profile } from 'src/pages/Profile/Profile';
import { Cart } from 'src/pages/cart';
import { Product } from 'src/pages/Product/Product';
import { Home } from 'src/pages/Home/Home';
import { NotFound } from 'src/pages/not-found';
import { Auth } from 'src/pages/Auth/Auth';
import { ROUTES } from 'src/shared/config';

export const Routing: FC = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    <Route
      path={ROUTES.PROFILE}
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route path={ROUTES.PRODUCT} element={<Product visible={true} />} />
    <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
    {/* <Route
      path={ROUTES.PRODUCT}
      element={
        <ProtectedAdminRoute>
          <Product visible={true} />
        </ProtectedAdminRoute>
      }
    /> */}
    <Route path={ROUTES.AUTH} element={<Auth visible={true} />} />
    <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
