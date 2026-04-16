import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
