import { createSlice } from "@reduxjs/toolkit";

export const menusSlice = createSlice({
  name: "menus",
  initialState: {
    cart: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      const menu = action.payload;
      state[menu] = !state[menu];
    },
  },
});

export default menusSlice.reducer;
export const { toggleMenu } = menusSlice.actions;