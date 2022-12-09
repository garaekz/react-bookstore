import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const productExists = state.find((b) => b.product && b.product.id === product.id);
      if (productExists) {
        productExists.quantity++;
        const tmpPrice = productExists.quantity * productExists.product.price;
        if (productExists.product.discount) {
          productExists.totalPrice = tmpPrice - (tmpPrice * productExists.product.discount) / 100;
        }
      } else {
        let totalPrice = product.price;
        if (product.discount) {
          totalPrice = product.price - (product.price * product.discount) / 100;
        }
        state.push({ product, quantity: 1, totalPrice });
      }
    },
    updateProduct: (state, action) => {
      const product = action.payload;
      const productExists = state.find((b) => b.product && b.product.id === product.id);
      if (!productExists) {
        return;
      }
      productExists.quantity = product.quantity;
      let tmpPrice = productExists.quantity * productExists.product.price;
      console.log("updateProduct", productExists);
      if (productExists.product.discount) {
        tmpPrice = tmpPrice - (tmpPrice * productExists.product.discount) / 100;
      }
      productExists.totalPrice = tmpPrice;
    },
    removeProduct: (state, action) => {
      console.log("removeProduct", action.payload);
      const index = state.findIndex((b) => b.product.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, updateProduct} = cartSlice.actions;