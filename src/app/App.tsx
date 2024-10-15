import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers';
import { Layout } from 'src/pages/Layout/Layout';
import { Initializer } from './store/Initializer';
import { Routing } from './routing/Routing';

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
