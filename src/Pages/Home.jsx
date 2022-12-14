import { useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { GoFlame } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import FeaturedProductCard from "../components/FeaturedProductCard";
import { fetchBooks } from "../store/bookSlice";
import { fetchGenres } from "../store/genreSlice";

function Home() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const books = useSelector((state) => state.books.list.data);
  const booksStatus = useSelector((state) => state.books.list.status);
  const genres = useSelector((state) => state.genres.data);
  const genresStatus = useSelector((state) => state.genres.status);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks())
    }
  }, [booksStatus])
  useEffect(() => {
    if (genresStatus === 'idle') {
      dispatch(fetchGenres())
    }
  }, [genresStatus])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  return (
    <>
    <div className="pt-10 pb-[70px] xl:py-[110px] bg-light">
      <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="mb-[25px] xl:mb-0 xl:pr-20">
              <span className="text-secondary font-bold flex items-center mb-[16px] leading-none">
                <div className="bg-secondary rounded-full flex items-center justify-center text-white p-1 mr-3">
                  <GoFlame />
                </div>
                A lit bookstore frontend made with React and Tailwind CSS
              </span>
              <h1 className="text-[34px] xl:text-[55px] mb-10 leading-[1.1] font-bold text-heading">
                Discover, try, test and love this bookstore frontend
              </h1>
              <div className="flex">
                <Link
                  to={"/shop"}
                  className="bg-white text-heading py-[12px] px-[25px] text-sm rounded-md relative inline-block z-[1] font-bold shadow-explore"
                >
                  Know more <CgArrowLongRight className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Slider {...settings}>
              {books.map((product) => (
                <FeaturedProductCard className="home-slider-card" key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-10 pb-[70px] xl:py-[110px] bg-white">
      <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <div className="mb-[25px] xl:mb-0 xl:pr-20">
              <span className="text-secondary font-bold flex items-center mb-[16px] leading-none">
                <div className="bg-secondary rounded-full flex items-center justify-center text-white p-1 mr-3">
                  <GoFlame />
                </div>
                The genres you love
              </span>
              <h1 className="text-[36px] xl:text-[36px] mb-10 leading-[1.1] font-bold text-heading">
                Browse through our genres
              </h1>
              <div className="flex">
                {
                  genres.map((genre) => (
                    <Link
                      key={genre.id}
                      to={`/shop?genre=${genre.id}`}
                      className="rounded-lg border border-[#f0f0f0] bg-white text-heading p-3 text-sm rounded-md relative inline-block z-[1] font-bold shadow-explore mr-3"
                    >
                      <div className="mb-2">
                        <img src={genre.image} className="h-24 w-40 w-full object-cover rounded-lg" alt="" />
                      </div>
                      <h6 className="w-full flex justify-center text-lg text-heading font-medium">
                      {genre.title}
                      </h6>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
