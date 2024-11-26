import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [], // Initialize as an empty array for products
  },
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload; // Replace the entire product list
    },
    removeProduct: (state, action) => {
      state.value = state.value.filter(
        (product) => product._id !== action.payload // Ensure payload is the product ID
      );
    },
    addtoProduct: (state, action) => {
      state.value.push(action.payload); // Add a new product object
    },
  },
});

export const { addProduct, removeProduct, addtoProduct } = productSlice.actions;

export default productSlice.reducer;
