import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: [
    {
      id: 1,
      title: "The Hobbit",
      image: "https://i0.wp.com/stonesoup.com/wp-content/uploads/2018/05/2018-6-The-Hobbit.jpg",
      author: "J.R.R. Tolkien",
      price: 10,
      rating: 5,
      discount: 0,
      genre: "Fantasy",
    },
    {
      id: 2,
      title: "Enders Game",
      image: "https://covers.openlibrary.org/b/id/8473692-L.jpg",
      author: "Orson Scott Card",
      price: 15,
      rating: 4,
      discount: 0,
      genre: "Sci-Fi",
    },
    {
      id: 3,
      title: "Harry Potter and the Philosopher's Stone",
      image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/aae7575/2147483647/strip/true/crop/360x420+0+0/resize/720x840!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fa1%2F15%2F406b12f246809bf0983b228e154b%2Fharry.png",
      author: "J.K. Rowling",
      price: 20,
      rating: 5,
      discount: 10,
      genre: "Fantasy",
    },
    {
      id: 4,
      title: "Crime and Punishment",
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781510766709/crime-and-punishment-9781510766709_xlg.jpg",
      author: "Fyodor Dostoyevsky",
      price: 35,
      rating: 4,
      discount: 25,
      genre: "Classic",
    },
    {
      id: 5,
      title: "1984",
      image: "https://cdn.shopify.com/s/files/1/0627/1477/products/1984-george-orwell-cover-print-179850_1024x1024.jpg",
      author: "George Orwell",
      price: 10,
      rating: 5,
      discount: 0,
      genre: "Sci-Fi",
    },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook, updateBook } = bookSlice.actions;