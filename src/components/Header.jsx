import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const items = useSelector(state => state.cart.items)
  const totalCount = Object.values(items).reduce((acc, it) => acc + it.quantity, 0)
  const location = useLocation()

  return (
    <header className="header">
      <div className="brand">
        <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
          <h1>GreenNest</h1>
        </Link>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:20}}>
        <nav className="nav-links">
          <Link to="/products" style={{fontWeight: location.pathname === '/products' ? 700 : 500}}>Products</Link>
          <Link to="/cart" style={{fontWeight: location.pathname === '/cart' ? 700 : 500}}>Cart</Link>
        </nav>

        <Link to="/cart" className="cart" aria-label="cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="#2f855a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="20" r="1.5" fill="#2f855a"/>
            <circle cx="18" cy="20" r="1.5" fill="#2f855a"/>
          </svg>
          <div className="count">{totalCount}</div>
        </Link>
      </div>
    </header>
  )
}
