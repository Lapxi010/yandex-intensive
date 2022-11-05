import React from "react";
import { Layout } from "./components/Layout/Layout.jsx";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage.jsx";
import { CardPage } from "./pages/CardPage/CardPage.jsx";
import { BasketPage } from "./pages/BasketPage/BasketPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<CatalogPage />}/>
            <Route path="/book/:id" element={<CardPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
