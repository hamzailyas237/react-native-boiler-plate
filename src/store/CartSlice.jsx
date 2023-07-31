import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
      console.log('state', state)
      console.log('action', action)
    },
  },
})

const {actions, reducer} = cartSlice
const {addToCart} = actions
export {addToCart, reducer as cartReducer}
