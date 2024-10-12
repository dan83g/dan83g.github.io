import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Providers } from './providers';
import { Layout } from 'src/pages/Layout/Layout';
import { Profile } from 'src/pages/Profile/Profile';
import { Cart } from 'src/pages/Cart/Cart';
import { Product } from 'src/pages/Product/Product';
import { Home } from 'src/pages/Home/Home';
import { NotFound } from 'src/pages/NotFound/NotFound';
import { Auth } from 'src/pages/Auth/Auth';
import { ProtectedRoute } from 'src/pages/Navigation/ProtectedRoute';
import { Initializer } from './store/Initializer';

function App() {
  return (
    <Providers>
      <Initializer />
      <BrowserRouter>
        <Layout>
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
                <ProtectedRoute isRestricted={true}>
                  <Product visible={true} />
                </ProtectedRoute>
              }
            />
            <Route path="auth" element={<Auth visible={true} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
