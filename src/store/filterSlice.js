import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    type: null,
    filter: null,
    sort: 'rating',
  },
  reducers: {
    setFilter: (state, action) => {
      const { type, filter } = action.payload;
      state.type = type;
      state.filter = filter;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    clearFilters: (state, action) => {
      state.type = null;
      state.filter = null;
    },
  },
});

export default filterSlice.reducer;
export const { setFilter, clearFilters, changeSort} = filterSlice.actions;