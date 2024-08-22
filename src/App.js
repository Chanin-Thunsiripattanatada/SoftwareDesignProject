import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';

import Cart from './components/CartPage/Cart';

import ProductDetail from './components/ProductDetail/ProductDetail';
import { ProductProvider } from './context';


import AboutMePage from './components/AboutMePage/AboutMePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes path="/">

            <Route index element={<MainPage />} />

            <Route path="/product/:id" element={<ProductProvider><ProductDetail /></ProductProvider>} />
            <Route path="/ตระกร้าสินค้า" element={<Cart />} />
            
            <Route path='เกี่ยวกับเรา' element={<AboutMePage />} />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
