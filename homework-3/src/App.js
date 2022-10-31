import './App.css';
import { Layout } from './components/Layout/Layout.jsx'
import { CatalogPage } from './pages/CatalogPage/CatalogPage.jsx'
import { CardPage } from './pages/CardPage/CardPage.jsx'
import { BasketPage } from './pages/BasketPage/BasketPage.jsx'
import { data } from './books.js'

function App() {
  return (
    <Layout>
      <CardPage data={data} />
    </Layout>
  );
}

export default App;
