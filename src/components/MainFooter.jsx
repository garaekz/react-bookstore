import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelopeOpen,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import service4 from "../assets/images/service4.png";
import subscribe from "../assets/images/subscribe.jpg";
import { MdOutgoingMail } from "react-icons/md";

function MainFooter() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const cartTotal = cart.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  return (
    <>
      <div className="pb-[60px]">
        <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto px-[15px]">
          <div
            style={{
              backgroundImage: `url(${subscribe})`,
            }}
            className="px-[20px] pt-[60px] pb-[45px] md:px-[30px] md:pt-[80px] md:pb-[65px] xl:px-[107px] xl:pt-[100px] xl:pb-[85px] rounded-md bg-no-repeat bg-cover bg-center"
          >
            <div className="">
              <span className="text-primary font-bold flex items-center mb-[10px]">
                <div className="bg-primary rounded-full flex items-center justify-center text-white p-1 mr-3">
                  <FaRegEnvelopeOpen />
                </div>
                Newsletter
              </span>
              <h2 className="text-[30px] lg:text-[36px] mb-[30px] md:mb-[40px] font-bold text-heading">
                Get weekly update
              </h2>
              <div className="block relative md:flex md:flex-wrap md:items-center w-full">
                <div className="mb-[15px] mr-5">
                  <label className="relative block">
                    <span className="absolute inset-y-0 left-[30px] flex items-center pl-2">
                      <MdOutgoingMail />
                    </span>
                    <input
                      type="text"
                      className="text-sm text-heading h-auto leading-[60px] bg-white pr-[30px] pl-[66px] w-full rounded-md outline-none md:w-[390px]"
                      placeholder="example@gmail.com"
                    />
                  </label>
                </div>
                <button className="bg-heading text-white rounded-md py-[15px] px-[30px] mb-[15px] md:pt-[16px] md:px-[38px] md:mb-[17px] inline-block">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto flex flex-wrap px-[15px]">
        <div className="border-none flex text-left mb-[30px] w-full md:w-1/2 lg:w-1/4">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service1} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">Fast & Secure Delivery</h6>
            <p className="text-body">
              We deliver your order in 3-5 days, no hassle.
            </p>
          </div>
        </div>
        <div className="border-none flex text-left mb-[30px] w-full md:w-1/2 lg:w-1/4">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service2} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">Money Back Guarantee</h6>
            <p className="text-body">100% money back guarantee.</p>
          </div>
        </div>
        <div className="border-none flex text-left mb-[30px] w-full md:w-1/2 lg:w-1/4">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service3} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">24 Retun Policy</h6>
            <p className="text-body">No questions asked.</p>
          </div>
        </div>
        <div className="border-none flex text-left mb-[30px] w-full md:w-1/2 lg:w-1/4">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service4} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">Professional Support</h6>
            <p className="text-body">24/7 Live support.</p>
          </div>
        </div>
      </div>
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
                <span className="p-[15px] text-sm font-medium">
                  2022 © All Rights Reserved. David Garay
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainFooter;
