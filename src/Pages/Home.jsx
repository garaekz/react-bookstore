import { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { GoFlame } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import FeaturedProductCard from "../Partials/FeaturedProductCard";

function Home() {
  const [count, setCount] = useState(0);
  const books = useSelector((state) => state.books);

  return (
    <div className="pt-10 pb-[70px] bg-light">
      <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="mb-[25px]">
          <span className="text-secondary font-bold flex items-center mb-[16px] leading-none">
            <div className="bg-secondary rounded-full flex items-center justify-center text-white p-1 mr-3">
              <GoFlame />
            </div>
            A lit bookstore frontend made with React and Tailwind CSS
          </span>
          <h1 class="text-[34px] mb-10 leading-[1.1] font-bold text-heading">
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
      <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="w-full z-[1] relative">
          <Slider>
            {books.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
