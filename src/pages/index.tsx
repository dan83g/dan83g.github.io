import React, { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@widgets/protected-route/ui';
import { ROUTES } from '@shared/config';

const HomePage = lazy(() => import('./home'));
const AuthPage = lazy(() => import('./auth'));
const ProductPage = lazy(() => import('./product'));
const CartPage = lazy(() => import('./cart'));
const ProfilePage = lazy(() => import('./profile'));
const OrderPage = lazy(() => import('./order'));
const AdminOrderPage = lazy(() => import('./admin-order'));
const AdminProductPage = lazy(() => import('./admin-product'));
const AdminCategoryPage = lazy(() => import('./admin-category'));
const NotFoundPage = lazy(() => import('./not-found'));

export const Routing: FC = () => (
  <Routes>
    {/* HomePage */}
    <Route
      index
      element={
        <Suspense fallback={<>...</>}>
          <HomePage />
        </Suspense>
      }
    />
    <Route
      path={ROUTES.NOT_FOUND}
      element={
        <Suspense fallback={<>...</>}>
          <NotFoundPage />
        </Suspense>
      }
    />
    {/* ProductPage */}
    <Route
      path={ROUTES.PRODUCT}
      element={
        <Suspense fallback={<>...</>}>
          <ProductPage />
        </Suspense>
      }
    />
    {/* CartPage */}
    <Route
      path={ROUTES.CART}
      element={
        <Suspense fallback={<>...</>}>
          <CartPage />
        </Suspense>
      }
    />
    {/* AuthPage */}
    <Route
      path={ROUTES.AUTH}
      element={
        <Suspense fallback={<>...</>}>
          <AuthPage visible={true} />
        </Suspense>
      }
    />
    {/* OrderPage */}
    <Route
      path={ROUTES.ORDERS}
      element={
        <Suspense fallback={<>...</>}>
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        </Suspense>
      }
    />
    {/* ProfilePage */}
    <Route
      path={ROUTES.PROFILE}
      element={
        <Suspense fallback={<>...</>}>
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        </Suspense>
      }
    />
    {/* AdminCategoryPage */}
    <Route
      path={ROUTES.ADMIN_CATEGORIES}
      element={
        <Suspense fallback={<>...</>}>
          <ProtectedRoute>
            <AdminCategoryPage />
          </ProtectedRoute>
        </Suspense>
      }
    />
    {/* AdminProductPage */}
    <Route
      path={ROUTES.ADMIN_PRODUCTS}
      element={
        <Suspense fallback={<>...</>}>
          <ProtectedRoute>
            <AdminProductPage />
          </ProtectedRoute>
        </Suspense>
      }
    />
    {/* AdminOrderPage */}
    <Route
      path={ROUTES.ADMIN_ORDERS}
      element={
        <Suspense fallback={<>...</>}>
          <ProtectedRoute>
            <AdminOrderPage />
          </ProtectedRoute>
        </Suspense>
      }
    />
  </Routes>
);
