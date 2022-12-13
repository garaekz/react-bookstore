import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "./client";
import qs from "qs";

const parseBookList = (data) => {
  return data.map((book) => {
    const { id, attributes } = book;
    const authors = attributes.authors.data.map(
      (author) => author.attributes
    );
    const genres = attributes.genres.data.map(
      (genre) => genre.attributes
    );

    return {
      id,
      ...attributes,
      authors,
      genres,
    };
  });
};

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: {
      data: [],
      pagination: {
        start: 0,
        limit: 10,
        total: 0,
      },
      status: "idle",
      error: null,
    },
    current: {
      data: null,
      status: "idle",
      error: null,
    },
    related: {
      data: [],
      slug: null,
      status: "idle",
      error: null,
    },
  },
  reducers: {
    setRelatedBookSlug(state, action) {
      state.related.slug = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const data = parseBookList(action.payload.data);
        const pagination = action.payload.meta.pagination;

        state.list.status = "succeeded";
        state.list.data = data;
        state.list.pagination = pagination;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.log(action.error.message);
        state.list.status = "failed";
        state.list.error = action.error.message;
      })
      .addCase(fetchBookBySlug.pending, (state) => {
        state.current.status = "loading";
      })
      .addCase(fetchBookBySlug.fulfilled, (state, action) => {
        const data = parseBookList(action.payload.data);

        state.current.status = "succeeded";
        state.current.data = data[0];
      })
      .addCase(fetchBookBySlug.rejected, (state, action) => {
        state.current.status = "failed";
        state.current.error = action.error.message;
      })
      .addCase(fetchRelatedBooks.pending, (state, action) => {
        console.log('loading', action);
        state.related.status = "loading";
      })
      .addCase(fetchRelatedBooks.fulfilled, (state, action) => {
        const data = parseBookList(action.payload.data);
        console.log('data', data);
        state.related.status = "succeeded";
        state.related.data = data;
      })
      .addCase(fetchRelatedBooks.rejected, (state, action) => {
        state.related.status = "failed";
        state.related.error = action.error.message;
        console.error(action.error.message);
      });
  },
});

export default bookSlice.reducer;
export const { booksRequested, booksReceived, booksRequestFailed } =
  bookSlice.actions;

const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  return await client(
    `${baseUrl}books?pagination[start]=0&pagination[limit]=10&populate=*`
  );
});

export const fetchBookBySlug = createAsyncThunk(
  "books/fetchBookBySlug",
  async (slug) => {
    return await client(
      `${baseUrl}books?filters[slug][$eqi]=${slug}&populate=*`
    );
  }
);

export const fetchRelatedBooks = createAsyncThunk(
  "books/fetchRelatedBooks",
  async (book, thunkAPI) => {
    thunkAPI.dispatch(bookSlice.actions.setRelatedBookSlug(book.slug));
    const { genres } = book;
    const genreSlugs = genres.map((genre) => genre.slug);
    const query = qs.stringify({
      filters: {
        genres: {
          slug: {
            $in: genreSlugs,
          },
        },
        slug: {
          $ne: book.slug,
        },
      },
      pagination: {
        page: 1,
        pageSize: 4,
      },
      populate: "*",
    }, {
      encodeValuesOnly: true,
    });

    console.log(query);
    return await client(`${baseUrl}books?${query}`);
  }
);
