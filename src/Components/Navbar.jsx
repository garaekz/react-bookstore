import reactLogo from "../assets/react.svg";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { CgHeart, CgSearch } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="py-[15px] lg:py-0 fixed h-20 inset-x-0 top-0 bg-white z-50 flex items-center">
      <div className="px-[15px] h-full w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={reactLogo} alt="React Logo" className="h-8 w-8" />
            </Link>
          </div>
          <div className="hidden xl:block ml-[150px] mx-[50px] w-full">
            <nav>
              <ul className="flex items-center flex-wrap justify-start -mx-6">
                <li className="group relative mx-6 text-heading font-bold transition duration-300">
                  <Link to={"/"} className="block h-20 min-h-20 leading-[80px]">
                    Home
                  </Link>
                  <div className="absolute bottom-[30px] h-0.5 w-0 opacity-0 bg-black group-hover:w-full group-hover:opacity-100 transition transition-all ease duration-500"></div>
                </li>
                <li className="group relative mx-6 text-heading font-bold transition duration-300">
                  <Link
                    to={"/shop"}
                    className="block h-20 min-h-20 leading-[80px]"
                  >
                    Shop
                  </Link>
                  <div className="absolute bottom-[30px] h-0.5 w-0 opacity-0 bg-black group-hover:w-full group-hover:opacity-100 transition transition-all ease duration-500"></div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-1">
            <ul className="flex items-center gap-6">
              <li>
                <CgSearch className="text-xl" />
              </li>
              <li>
                <CgHeart className="text-xl" />
              </li>
              <li>
                <Link to={"/shop"} className="hover:bg-body flex justify-center items-center hover:text-white">
                  <IoCartOutline className="text-2xl" />
                </Link>
              </li>
              <li>
                <IoPersonOutline className="text-lg" />
              </li>
              <li className="md:hidden">
                <RxHamburgerMenu className="text-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
