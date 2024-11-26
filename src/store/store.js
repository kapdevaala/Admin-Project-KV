import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authResucer from "./slices/authSlice";

export default configureStore({
  reducer: {
    auth: authResucer,
    product: productReducer,
  },
});
