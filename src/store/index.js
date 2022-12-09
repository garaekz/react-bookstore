import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import menusReducer from "./menusSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
    filter: filterReducer,
    menus: menusReducer,
  },
});