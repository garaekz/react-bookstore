import SingleProductCard from "../components/SingleProductCard";
import { HiFilter, HiMinus, HiPlus } from "react-icons/hi";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearFilters, setFilter, changeSort } from "../store/filterSlice";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { fetchBooks } from "../store/bookSlice";

function Shop() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.books.list.data);
  const pagination = useSelector((state) => state.books.list.pagination);
  const status = useSelector((state) => state.books.list.status);
  const error = useSelector((state) => state.books.list.error);

  const filter = useSelector((state) => state.filter);
  const [isGenresOpen, setIsGenresOpen] = useState(true);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    console.log(status);
    if (status === 'idle') {
      dispatch(fetchBooks())
    }
  }, [status])

  const filterProducts = (type, filter) => {
    dispatch(setFilter({ type, filter }));
  };

  const filteredBooks = [];

  const genres = [];
  const authors = [];

  return (
    <>
      {/* BreadCrumbs */}
      <div className="relative pt-10 pb-[45px] bg-[#f8f8f8]">
        <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="shrink-0 w-full max-w-full">
              <ul className="flex p-0 mb-4 items-center">
                <li className="inline-block font-medium text-[#999] hover:text-gray-900">
                  <Link to="/">Home</Link>
                </li>
                <li className="h-3 w-0.5 bg-[#e5e5e5] mx-2"></li>
                <li className="inline-block font-medium text-primary">
                  <span>Shop</span>
                </li>
              </ul>
              <h1 className="text-[34px] md:text-[40px] font-bold">
                Explore All Products
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Shop area */}
      <div className="py-[60px] sm:py-20 bg-white">
        <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap -mx-3">
            {/* Backdrop filters */}
            {isFiltersOpen && (
              <div
                onClick={() => setIsFiltersOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-70 z-30"
              ></div>
            )}
            {/* Filter menu */}
            <div
              className={`${
                isFiltersOpen ? "left-0" : "left-[-380px]"
              } z-40 lg:z-10 bg-white fixed top-0 bottom-0 lg:relative w-[280px] pt-[100px] px-5 pb-[50px] lg:w-1/4 lg:block lg:left-0 lg:p-0 lg:px-[15px] mx-auto transition-all duration-300 overflow-auto`}
            >
              <div className="pr-5 lg:relative">
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsFiltersOpen(false)}
                    className="text-body rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition duration-300 absolute top-[15px] w-[30px] h-[30px]"
                  >
                    <FaTimes />
                  </button>
                </div>
                {/* Genres */}
                <div className="relative pb-10">
                  <div
                    className={`${
                      isGenresOpen ? "after:w-full" : "after:w-0"
                    } flex justify-between border-b-2 border-light mb-5 pb-2.5 relative items-center after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}
                  >
                    <h6 className="uppercase font-medium text-lg">genre</h6>
                    <button onClick={() => setIsGenresOpen(!isGenresOpen)}>
                      {isGenresOpen ? <HiMinus /> : <HiPlus />}
                    </button>
                  </div>
                  <div className="h-full">
                    <ul
                      className={`${
                        !isGenresOpen ? "h-0" : "h-36"
                      } transition-all duration-300 overflow-hidden -my-[5px]`}
                    >
                      {genres.map((genre, index) => (
                        <li className="m-0 py-[6px]" key={index}>
                          <button
                            className="flex items-center gap-3"
                            onClick={() => filterProducts("genre", genre)}
                          >
                            {filter.type === "genre" &&
                            filter.filter === genre ? (
                              <BsCheckCircleFill className="text-primary" />
                            ) : (
                              <BsCircle className="text-body" />
                            )}
                            <span className="text-sm font-medium text-body">
                              {genre}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Authors */}
                <div className="relative pb-10">
                  <div
                    className={`${
                      isAuthorsOpen ? "after:w-full" : "after:w-0"
                    } flex justify-between border-b-2 border-light mb-5 pb-2.5 relative items-center after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}
                  >
                    <h6 className="uppercase font-medium text-lg">author</h6>
                    <button onClick={() => setIsAuthorsOpen(!isAuthorsOpen)}>
                      {isAuthorsOpen ? <HiMinus /> : <HiPlus />}
                    </button>
                  </div>
                  <div className="h-full">
                    <ul
                      className={`${
                        !isAuthorsOpen ? "h-0" : "h-56"
                      } transition-all duration-300 overflow-hidden -my-[5px]`}
                    >
                      {authors.map((author, index) => (
                        <li className="m-0 py-[6px]" key={index}>
                          <button
                            className="flex items-center gap-3"
                            onClick={() => filterProducts("author", author)}
                          >
                            {filter.type === "author" &&
                            filter.filter === author ? (
                              <BsCheckCircleFill className="text-primary" />
                            ) : (
                              <BsCircle className="text-body" />
                            )}
                            <span className="text-sm font-medium text-body">
                              {author}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button 
                  onClick={() => dispatch(clearFilters())}
                  className="block relative w-full text-center text-white bg-primary py-[15px] rounded-lg font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded-lg before:bg-primary before:z-[-1]"
                >
                  Clear Filter

                </button>
              </div>
            </div>
            <div className="px-4 w-full lg:w-3/4 max-w-full shrink-0">
              {/* Select part */}
              <div className="flex flex-wrap -mx-4">
                <div className="px-4 w-full max-w-full">
                  <div className="mb-10">
                    <div className="flex flex-wrap justify-between lg:justify-end items-center -m-2.5">
                      <span className="m-2.5 font-medium">
                        {`Showing ${list.length} of ${pagination.total} products`}
                      </span>
                      <select value={filter.sort} onChange={event => dispatch(changeSort(event.target.value)) } className="form-select appearance-none bg-no-repeat px-8 md:pr-11 m-2.5 h-14 font-medium border-2 border-[#CBD3D9] rounded-md outline-none w-full md:w-auto text-[#27272E] appearence-none">
                        <option value="rating">Sort by rating</option>
                        <option value="title">Sort by title</option>
                        <option value="pricehigh">Sort by price: high to low</option>
                        <option value="pricelow">Sort by price: low to high</option>
                      </select>
                    </div>
                    <button
                      onClick={() => setIsFiltersOpen(true)}
                      className="lg:hidden mt-5 md:mt-2.5 uppercase text-sm flex items-center"
                    >
                      <HiFilter className="mr-2 text-lg" /> filter
                    </button>
                  </div>
                </div>
              </div>
              {/* Product grid */}
              <div className="flex flex-wrap -mx-4">
                {/* Single product */}
                {list.map((book, index) => (
                  <div key={index} className="px-4 w-full md:w-1/2 xl:w-1/3 max-w-full transition ease-in-out duration-300">
                    <SingleProductCard product={book} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
