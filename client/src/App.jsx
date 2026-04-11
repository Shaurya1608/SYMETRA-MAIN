import { Routes, Route } from 'react-router-dom'
import { SmoothScroll } from './components/SmoothScroll'
import { LandingPage } from './pages/LandingPage'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </SmoothScroll>
  )
}

export default App
