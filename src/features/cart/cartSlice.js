import { createSlice } from '@reduxjs/toolkit'
import productsData from '../../data/products'

const initialState = {
  // items keyed by product id { id, name, price, thumbnail, quantity }
  items: {},
  products: productsData
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const prod = state.products.find(p => p.id === action.payload)
      if (!prod) return
      if (state.items[prod.id]) {
        state.items[prod.id].quantity += 1
      } else {
        state.items[prod.id] = { id: prod.id, name: prod.name, price: prod.price, thumbnail: prod.thumbnail, quantity: 1 }
      }
    },
    increase(state, action) {
      const id = action.payload
      if (state.items[id]) state.items[id].quantity += 1
    },
    decrease(state, action) {
      const id = action.payload
      if (!state.items[id]) return
      state.items[id].quantity -= 1
      if (state.items[id].quantity <= 0) {
        delete state.items[id]
      }
    },
    remove(state, action) {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
    },
    clearCart(state) {
      state.items = {}
    }
  }
})

export const { addToCart, increase, decrease, remove, clearCart } = cartSlice.actions

export default cartSlice.reducer
