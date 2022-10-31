import React from "react";
import { Layout } from './components/Layout/Layout.jsx'
import { CatalogPage } from './pages/CatalogPage/CatalogPage.jsx'
import { CardPage } from './pages/CardPage/CardPage.jsx'
import { BasketPage } from './pages/BasketPage/BasketPage.jsx'

const App = () => {
  return (
    <Layout>
      <CatalogPage/>
    </Layout>
  );
}

export default App;
