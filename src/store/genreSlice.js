import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "./client";
import qs from "qs";

const parseStrapiResponse = (data) => {
  return data.map((item) => {
    const { id, attributes } = item;

    return {
      id,
      ...attributes,
    };
  });
};

export const genreSlice = createSlice({
  name: "genres",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        const data = parseStrapiResponse(action.payload.data);
        state.status = "succeeded";
        state.data = data;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default genreSlice.reducer;

const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  return await client(
    `${baseUrl}genres`
  );
});
