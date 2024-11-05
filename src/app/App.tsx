import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers';
import { Layout } from '@pages/layout';
import { Routing } from '../pages';
import { Initializer } from '@features/initializer';

function App() {
  return (
    <Providers>
      <Initializer />
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
