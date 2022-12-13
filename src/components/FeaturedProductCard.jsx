import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../store/cartSlice";
import RatingStars from "./RatingStars";

function FeaturedProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const calculateDiscount = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="group scale-100 shadow-featured my-5 relative duration-300 rounded-md text-center before:w-full before:h-50px before:bg-black before:absolute before:left-0 before:top-1/2 before:blur-[100px] before:translate-y-[-50%]">
      {/* Thumbnail */}
      <div className="relative block">
        <Link
          to={`/shop/${product.slug}`}
          className="rounded-t-lg overflow-hidden block relative bg-[#f7f7f7]"
        >
          <img
            src={product.image}
            alt="product"
            className="rounded-t-lg w-full h-[400px] inline-block duration-300 object-cover object-center"
          />
        </Link>
      </div>
      {/* Content */}
      <div className="p-[30px] pt-[25px] relative bg-white">
        <div className="duration-300"></div>
        {/* Rating */}
        <h5 className="text-body mb-2.5 font-medium">
          <a href="#">{product.title}</a>
        </h5>
        <div className="-m-1 mb-2.5">
          {product.discount > 0 ? (
            <>
              <span className="text-heading text-xl font-bold mx-1">
                {`$${calculateDiscount(product.price, product.discount).toFixed(
                  2
                )}`}
              </span>
              <span className="text-[#d6d6d6] text-xl font-bold mx-1 line-through	">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-heading text-xl font-bold mx-1">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="w-full flex justify-center">
          <Link
            to={`/shop/${product.slug}`}
            className="relative block h-10 bg-secondary text-white font-bold rounded px-[18px] leading-[39px] before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-secondary z-10 before:z-[-1]"
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
