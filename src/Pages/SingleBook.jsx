import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../store/cartSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedProducts from "../components/RelatedProducts";
import { useEffect } from "react";
import { fetchBookBySlug, fetchRelatedBooks } from "../store/bookSlice";
import RatingStars from "../components/RatingStars";
import SingleProductSkeleton from "../components/SimplePageSkeleton";
import RelatedProductCardSkeleton from "../components/RelatedProductCardSkeleton";

function SingleBook() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.current.data);
  const error = useSelector((state) => state.books.current.error);
  const status = useSelector((state) => state.books.current.status);

  const relatedBooks = useSelector((state) => state.books.related.data);
  const relatedBooksError = useSelector((state) => state.books.related.error);
  const relatedBooksStatus = useSelector((state) => state.books.related.status);
  const relatedBooksSlug = useSelector((state) => state.books.related.slug);

  useEffect(() => {

    if (status === "idle" || (book && book.slug !== slug)) {
      window.scrollTo(0, 0);
      dispatch(fetchBookBySlug(slug));
    }
  }, [status, slug]);

  useEffect(() => {
    if (relatedBooksStatus === "idle" || (book && relatedBooksSlug !== book.slug)) {
      dispatch(fetchRelatedBooks(book));
    }
  }, [book])
  

  const calculateDiscount = (price, discount) => {
    return price - (price * discount) / 100;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: relatedBooks.length > 4 ? 4 : relatedBooks.length,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  let description = (
  <div className="pt-[80px] pb-[80px] animate-pulse">
    <SingleProductSkeleton />
  </div>
  );
  
  if (status === "succeeded") {
    description = <div className="pt-[80px] pb-[80px]">
    <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto flex flex-wrap">
      <div className="2xl:-mx-[50px] w-full flex flex-wrap">
        {/* Image */}
        <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
          <div className="h-full">
            <div className="sticky top-[100px] z-0">
              <div className="relative">
                <div className="relative block">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full rounded-md h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
          <div className="h-full">
            <div className="sticky top-[100px] z-0">
              <div className="block">
                <div>
                  <h2 className="text-dark font-bold text-[26px] md:text-[30px]">
                    {book.title}
                  </h2>
                  <h6 className="mb-5 font-medium text-[20px] text-body">
                    {book.authors.map((author) => author.name).join(", ")}
                  </h6>
                  {book.discount > 0 ? (
                    <div className="flex">
                      <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 mr-4">
                        {`$${calculateDiscount(
                          book.price,
                          book.discount
                        ).toFixed(2)}`}
                      </div>
                      <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 line-through	text-[#d6d6d6] ">
                        ${book.price.toFixed(2)}
                      </div>
                    </div>
                  ) : (
                    <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5">
                      ${book.price.toFixed(2)}
                    </div>
                  )}
                  <div className="flex justify-between mb-10">
                    <button
                      onClick={() => dispatch(addProduct(book))}
                      className="block relative w-full text-center text-white bg-primary py-[15px] rounded-md font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-300 hover:before:scale-105 before:rounded-md before:bg-primary before:z-[-1]"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="border-b border-light my-[30px] pb-[30px] flex items-center lg:justify-between">
                    <div>
                    <span className="text-[20px] font-medium text-heading">Genre: </span> 
                    {
                      book.genres.map((genre, index) => {
                        return (
                          <span key={index} className="text-[20px] font-medium text-heading ml-[10px]">{genre.title}</span>
                        )
                      })
                    }
                    </div>
                    <div className="flex items-center">
                    <span className="text-[20px] font-medium text-heading mr-2">Rating: </span> 
                    <RatingStars className="text-xl" rating={book.rating} />
                    </div>
                  </div>
                  <div className="mt-[80px]">
                    <h4 className="text-primary font-bold text-[24px] mb-10">Description</h4>
                    <p className="text-body">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
  
  return (
    <>
      { description }
      {/* Related Products */}
      { <RelatedProducts 
        settings={settings}
        related={relatedBooks}
        // We need to check if the related books are loaded so as the main book
        status={status === 'succeeded' && relatedBooksStatus === 'succeeded'} /> }
    </>
  );
}

export default SingleBook;
