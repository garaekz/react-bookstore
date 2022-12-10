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
    <div className="group scale-100 shadow-featured my-5 relative duration-300 rounded-md text-center">
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
      <div className="p-[30px] pt-[25px] relative">
        <div className="duration-300">

        </div>
        {/* Rating */}
        <div className="text-lg mb-2.5">
          <RatingStars rating={product.rating} />
        </div>
        <h5 className="text-body mb-2.5 font-medium">
          <a href="#">{product.title}</a>
        </h5>
        <div className="-m-1">
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
      </div>
    </div>
  );
}

export default FeaturedProductCard;
