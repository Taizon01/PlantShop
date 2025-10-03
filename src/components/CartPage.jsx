import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, remove } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage(){
  const itemsObj = useSelector(state => state.cart.items)
  const items = Object.values(itemsObj)
  const dispatch = useDispatch()

  const totalCount = items.reduce((acc, it) => acc + it.quantity, 0)
  const totalCost = items.reduce((acc, it) => acc + it.quantity * it.price, 0)

  const handleCheckout = () => {
    alert('Coming Soon')
  }

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      <p>Total items: <strong>{totalCount}</strong> — Total cost: <strong>₱{totalCost}</strong></p>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products"><button className="btn-primary">Continue Shopping</button></Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(it => (
                <tr key={it.id}>
                  <td style={{display:'flex', gap:12, alignItems:'center'}}>
                    <img src={it.thumbnail} className="thumb" alt={it.name} />
                    <div>
                      <div style={{fontWeight:700}}>{it.name}</div>
                    </div>
                  </td>
                  <td>₱{it.price}</td>
                  <td>
                    <div className="qty-controls">
                      <button className="small-btn" onClick={() => dispatch(decrease(it.id))}>-</button>
                      <div>{it.quantity}</div>
                      <button className="small-btn" onClick={() => dispatch(increase(it.id))}>+</button>
                    </div>
                  </td>
                  <td>₱{it.price * it.quantity}</td>
                  <td>
                    <button className="btn-ghost" onClick={() => dispatch(remove(it.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="actions">
            <button className="btn-primary" onClick={handleCheckout}>Checkout</button>
            <Link to="/products"><button className="btn-ghost">Continue Shopping</button></Link>
          </div>
        </>
      )}
    </div>
  )
}
