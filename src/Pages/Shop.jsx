import SingleProduct from "../Partials/SingleProduct";
import { HiFilter, HiMinus } from "react-icons/hi";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { addProduct } from "../store/cartSlice";

function Shop() {
  const books = useSelector((state) => state.books);
    
  return (
    <>
      {/* BreadCrumbs */}
      <div className="relative pt-10 pb-[45px] bg-[#f8f8f8]">
        <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="px-4 shrink-0 w-full max-w-full">
              <ul className="flex p-0 mb-4 items-center">
                <li className="inline-block font-medium text-[#999] hover:text-gray-900">
                  <a href="#">Home</a>
                </li>
                <li className="h-3 w-0.5 bg-[#e5e5e5] mx-2"></li>
                <li className="inline-block font-medium text-primary hover:text-gray-900">
                  <a href="#">Shop</a>
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
          <div className="flex flex-wrap -mx-4">
            {/* Filter menu */}
            <div className="hidden w-full lg:block w-1/4 px-[15px] mx-auto">
              <div className="pr-5 relative">
                <div className="lg:hidden"></div>
                <div className="flex justify-between border-b-2 border-primary mb-5 pb-2.5 relative items-center">
                  <h6 className="uppercase font-medium text-lg">categories</h6>
                  <button>
                    <HiMinus />
                  </button>
                </div>
                <div>
                  <ul className="-my-[5px]">
                    <li className="m-0 py-[6px] flex items-center gap-3">
                      <BsCheckCircleFill className="text-primary" /> <span className="text-sm font-medium text-body">Fantasy</span>
                    </li>
                    <li className="m-0 py-[6px] flex items-center gap-3">
                      <BsCircle className="text-body" /> <span className="text-sm font-medium text-body">Thriller</span>
                    </li>
                    <li className="m-0 py-[6px] flex items-center gap-3">
                      <BsCircle className="text-body" /> <span className="text-sm font-medium text-body">Sci-fi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-4 w-full lg:w-3/4 max-w-full shrink-0">
              {/* Select part */}
              <div className="flex flex-wrap -mx-4">
                <div className="px-4 w-full max-w-full">
                  <div className="mb-10">
                    <div className="flex flex-wrap justify-between lg:justify-end items-center -m-2.5">
                      <span className="m-2.5 font-medium">
                        Showing 1-12 of 84 results
                      </span>
                      <select className="form-select appearance-none bg-no-repeat px-8 md:pr-11 m-2.5 h-14 font-medium border-2 border-[#CBD3D9] rounded-md outline-none w-full md:w-auto text-[#27272E] appearence-none">
                        <option value="1">Sort by latest</option>
                        <option value="2">Sort by oldest</option>
                        <option value="3">Sort by name</option>
                        <option value="4">Sort by price</option>
                      </select>
                    </div>
                    <button className="lg:hidden mt-5 md:mt-2.5 uppercase text-sm flex items-center">
                      <HiFilter className="mr-2 text-lg" /> filter
                    </button>
                  </div>
                </div>
              </div>
              {/* Product grid */}
              <div className="flex flex-wrap -mx-4">
                {/* Single product */}
                {books.map(book => (
                  <SingleProduct key={book.id} book={book} />
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
