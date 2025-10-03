import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import ProductsPage from './components/ProductsPage'
import CartPage from './components/CartPage'

export default function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}
