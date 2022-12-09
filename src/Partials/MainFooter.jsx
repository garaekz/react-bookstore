import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

function MainFooter() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const cartTotal = cart.reduce((acc, item) => {
    console.log(item);
    return acc + item.totalPrice;
  }, 0);

  return (
    <footer className="bg-[#f8f8f8]">
      <div className="relative py-[15px]">
        <div className="px-[15px] w-full mx-auto">
          <div className="flex flex-wrap lg:justify-between -mx-[15px] items-center">
            <div className="px-[15px] mx-auto flex flex-wrap items-center justify-center text-body">
              <FaFacebookF className="" />
              <FaInstagram className="ml-[15px]" />
              <FaTwitter className="ml-[15px]" />
              <FaLinkedinIn className="ml-[15px]" />
            </div>
            <div className="px-[15px] flex justify-center items-center mx-auto text-body">
              <span className="p-[15px] text-sm font-medium">2022 © All Rights Reserved. David Garay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
