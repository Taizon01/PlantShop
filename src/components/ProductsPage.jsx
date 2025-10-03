import React, { useState } from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'

export default function ProductsPage(){
  const categories = Array.from(new Set(products.map(p => p.category)))
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="container">
      <h2>Shop Houseplants</h2>
      <p>Choose from our curated selection of houseplants.</p>

      <div className="categories">
        <div className="category-pill" onClick={() => setActive('All')} style={{background: active === 'All' ? '#2f855a' : undefined, color: active === 'All' ? '#fff' : undefined}}>All</div>
        {categories.map(cat => (
          <div key={cat} className="category-pill" onClick={() => setActive(cat)} style={{background: active === cat ? '#2f855a' : undefined, color: active === cat ? '#fff' : undefined}}>
            {cat}
          </div>
        ))}
      </div>

      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
