import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Providers } from './providers';
import { Layout } from 'src/pages/Layout/Layout';
import { Profile } from 'src/pages/Profile/Profile';
import { Cart } from 'src/pages/Cart/Cart';
import { Product } from 'src/pages/Product/Product';
import { Home } from 'src/pages/Home/Home';
import { NotFound } from 'src/pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
