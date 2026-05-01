import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { ProductDetail } from './pages/ProductDetail';
import { ProductsPage } from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  )
}

export default App
