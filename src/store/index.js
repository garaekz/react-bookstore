import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
  },
});