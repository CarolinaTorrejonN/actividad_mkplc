import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductList from './components/ProductList/ProductList'

function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />Z
     </Routes>
    </>
  )
}

export default App
