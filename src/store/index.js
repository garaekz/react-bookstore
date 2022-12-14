import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import cartReducer from "./cartSlice";
import genreReducer from "./genreSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
    genres: genreReducer,
    filter: filterReducer,
  },
});