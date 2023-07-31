import axios from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const STATUSES = {
  success: 'success',
  loading: 'loading',
  error: 'error',
}
const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES,
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUSES.loading
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // console.log('action', action)
      state.status = STATUSES.success
      state.data = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUSES.error
    })
  },
})

const {reducer} = ProductSlice

// THis CODE IS CAUSING PROBLEM (CHECK HOW TO RETURN PROMISE USING AXIOS SO THAT WE CAN THAT THSE IN BUILDER)

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//   await axios
//     .get('https://jsonplaceholder.typicode.com/photos')
//     .then(res => {
//       //   console.log('res.data', res.data)
//       return res.data
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// })

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  // products/fetch or any name
  const productsData = await fetch(
    'https://jsonplaceholder.typicode.com/photos',
  )
  // console.log('productsData ==> ', productsData);
  const products = await productsData.json()
  // console.log('products ==> ', products)
  return products
})

export {reducer as productReducer}
