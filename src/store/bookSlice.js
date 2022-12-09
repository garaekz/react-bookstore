import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: [
    {
      id: 1,
      title: "The Hobbit",
      slug: "the-hobbit",
      image: "https://i0.wp.com/stonesoup.com/wp-content/uploads/2018/05/2018-6-The-Hobbit.jpg",
      author: "J.R.R. Tolkien",
      price: 10,
      rating: 5,
      discount: 0,
      genre: "Fantasy",
      description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
    },
    {
      id: 2,
      title: "Enders Game",
      slug: "enders-game",
      image: "https://covers.openlibrary.org/b/id/8473692-L.jpg",
      author: "Orson Scott Card",
      price: 15,
      rating: 3.5,
      discount: 0,
      genre: "Sci-Fi",
      description: "Ender's Game is a 1985 military science fiction novel by American author Orson Scott Card. Set in Earth's future, the novel presents an imperiled mankind after two conflicts with the Formics, an insectoid alien species. The novel's story follows the experiences of Andrew 'Ender' Wiggin, who is drafted to train at Battle School for a future invasion. Ender is recruited by his brother Peter and Colonel Graff to lead the Battle School against the Formics. The novel explores Ender's psychological development, his relationships with his peers and superiors, and his tactics as a military leader.",
    },
    {
      id: 3,
      title: "Harry Potter and the Philosopher's Stone",
      slug: "harry-potter-and-the-philosophers-stone",
      image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/aae7575/2147483647/strip/true/crop/360x420+0+0/resize/720x840!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fa1%2F15%2F406b12f246809bf0983b228e154b%2Fharry.png",
      author: "J.K. Rowling",
      price: 20,
      rating: 5,
      discount: 10,
      genre: "Fantasy",
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
    },
    {
      id: 4,
      title: "Crime and Punishment",
      slug: "crime-and-punishment",
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781510766709/crime-and-punishment-9781510766709_xlg.jpg",
      author: "Fyodor Dostoyevsky",
      price: 35,
      rating: 4.5,
      discount: 25,
      genre: "Thriller",
      description: "Crime and Punishment is a novel by the Russian author Fyodor Dostoyevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel's full title is Crime and Punishment: A Novel in Four Parts. The author completed the work in four months, from February to May 1866. The novella reflects Dostoyevsky's own experiences in prison, where he was sentenced to death in 1849. It is considered one of the first great works of world literature, and one of the finest psychological novels ever written.",
    },
    {
      id: 5,
      title: "1984",
      slug: "1984",
      image: "https://cdn.shopify.com/s/files/1/0627/1477/products/1984-george-orwell-cover-print-179850_1024x1024.jpg",
      author: "George Orwell",
      price: 10,
      rating: 5,
      discount: 0,
      genre: "Sci-Fi",
      description: "Nineteen Eighty-Four, often published as 1984, is a dystopian novel published in 1949 by English author George Orwell. The novel is set in Airstrip One, a world of perpetual war, omnipresent government surveillance, and public manipulation, dictated by a political system euphemistically named English Socialism (or Ingsoc in Newspeak, the government's invented language) under the control of a privileged Inner Party elite that persecutes all individualism and independent thinking as thoughtcrime. The story is set in London, Oceania, which is a province of the superstate known as Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      slug: "the-great-gatsby",
      image: "https://149352626.v2.pressablecdn.com/wp-content/uploads/2018/02/CK-3-684x1024.jpg",
      author: "F. Scott Fitzgerald",
      price: 15,
      rating: 4,
      discount: 0,
      genre: "Novel",
      description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession\" it is an exquisitely crafted tale of America in the 1920s.", 
    },
    {
      id: 7,
      title: "Harry Potter and the Chamber of Secrets",
      slug: "harry-potter-and-the-chamber-of-secrets",
      image: "https://m.media-amazon.com/images/I/51mFoFmu0EL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      author: "J.K. Rowling",
      price: 20,
      rating: 5,
      discount: 10,
      genre: "Fantasy",
      description: ""
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