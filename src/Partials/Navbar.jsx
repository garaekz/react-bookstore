import reactLogo from "../assets/react.svg";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { CgHeart, CgSearch } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SingleCartProduct from "./SingleCartProduct";
import { toggleMenu } from "../store/menusSlice";

function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartMenu = useSelector((state) => state.menus.cart);
  const cartQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const cartTotal = cart.reduce((acc, item) => {
    console.log(item);
    return acc + item.totalPrice;
  }, 0);

  return (
    <>
      <header className="py-[15px] lg:py-0 fixed h-20 inset-x-0 top-0 bg-white z-20 flex items-center">
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
                    <Link
                      to={"/"}
                      className="block h-20 min-h-20 leading-[80px]"
                    >
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
                {/* Search commented 'till implementation */}
                {/* <li>
                  <Link
                    to={"/shop"}
                    className="flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300"
                  >
                    <CgSearch className="text-xl" />
                  </Link>
                </li> */}
                <li>
                  {/* Wishlist commented 'till implementation */}
                  {/* <Link
                    to={"/shop"}
                    className="flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300"
                  >
                    <CgHeart className="text-xl" />
                  </Link> */}
                </li>
                <li>
                  <button
                    onClick={() => dispatch(toggleMenu('cart'))}
                    className="relative flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300"
                  >
                    {cartQuantity > 0 && (
                      <span className="text-center bg-primary border-2 border-white text-xs font-medium text-white rounded-full h-[22px] w-[22px] absolute top-[-12px] right-[-12px]">
                        {cartQuantity}
                      </span>
                    )}
                    <IoCartOutline className="text-2xl" />
                  </button>
                </li>
                {/* Profile commented 'till implementation */}
                {/* <li>
                  <Link
                    to={"/shop"}
                    className="flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300"
                  >
                    <IoPersonOutline className="text-lg" />
                  </Link>
                </li> */}
                <li className="md:hidden">
                  <RxHamburgerMenu className="text-xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Backdrop */}
      {cartMenu && (
        <div
          onClick={() => dispatch(toggleMenu('cart'))}
          className="fixed inset-0 bg-black bg-opacity-70 z-30 transition ease-in-out duration-300">
        </div>
      )}
      {/* Cart side menu */}
      <div className={`${cartMenu ? 'right-0':'right-[-600px]'} w-full md:w-[600px] fixed inset-y-0 z-40 transition-all duration-500`}>
        <div className="scrollbar bg-white h-full w-full md:w-[600px] flex flex-col py-[30px] px-[15px] md:py-[60px] md:px-[50px] overflow-auto">
          <div className="flex justify-between items-center border-b-2 border-light pb-[18px]">
            <h2 className="text-[#27272e] mb-0 text-[26px] font-bold">Cart review</h2>
            <button onClick={() => dispatch(toggleMenu('cart'))} className="h-10 w-10 text-body rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition duration-300">
              <FaTimes />
            </button>
          </div>
          <div className="flex-auto py-[30px]">
            <ul>
              {cart.map((item, index) => (
                <SingleCartProduct key={index} item={item} />
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-light">
              <h3 className="flex items-center justify-between my-[22px] text-[20px] font-bold">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </h3>
              <div className="flex gap-6 font-bold">
                <Link to="/shop" className="block relative w-full text-center text-white bg-primary py-[15px] rounded-md transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded before:bg-primary z-10 before:z-[-1]">View Cart</Link>
                <Link to="/shop" className="block relative w-full text-center text-white bg-secondary py-[15px] rounded-md transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded before:bg-secondary z-10 before:z-[-1]">Checkout</Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
