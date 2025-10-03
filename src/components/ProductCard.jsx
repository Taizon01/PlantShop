import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const inCart = items[product.id]?.quantity > 0

  const handleAdd = () => {
    dispatch(addToCart(product.id))
  }

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">₱{product.price}</div>
      <div style={{marginTop:8}}>
        <button className="add-btn" onClick={handleAdd} disabled={inCart}>
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
