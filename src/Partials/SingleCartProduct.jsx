import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProduct, removeProduct } from "../store/cartSlice";
import RatingStars from "./RatingStars";

function SingleCartProduct({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const removeFromCart = (id) => {
    dispatch(removeProduct(id));
  };
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      return removeFromCart(id);
    }
    dispatch(updateProduct({ id, quantity }));
  };

  return (
    <li className="flex items-center text-body mt-2 mb-[30px] pb-[30px] border-b border-[#f6f7fb]">
      <div className="mr-[30px] relative">
        <Link to={'/shop'}
          className="block bg-[#f7f7f7] rounded-md overflow-hidden relative h-[100px] w-[100px] p-2 w-full"
        >
          <img
            src={item.product.image}
            alt="product"
            className="max-h-[150px] h-full w-auto mx-auto object-cover"
          />
        </Link>
        <button onClick={() => removeFromCart(item.product.id)} className="h-[31px] w-[31px] bg-[#f6f7fb] border-2 border-white rounded-full absolute top-[-15px] left-[-10px] transition-all duration-300">
          <FaTimes className="text-black text-xs inline-block" />
        </button>
      </div>
      <div className="flex-1 relative pr-[110px]">
        <div className="mb-[14px] text-sm">
          <RatingStars rating={item.product.rating} />
        </div>
        <h3 className="text-heading font-bold hover:text-primary duration-300 mb-[10px] overflow-hidden ">
          <Link to={'/shop'}>
            {item.product.title}
          </Link>
        </h3>
        <div className="text-[18px] text-black">
          ${item.product.price.toFixed(2)}
        </div>
        <div className="flex items-center absolute top-1/2 right-0 justify-end">
          <span onClick={() => updateQuantity(item.product.id, item.quantity-1)} className="text-[10px] flex items-center justify-center cursor-pointer h-[26px] w-[26px] bg-[#f6f7fb] rounded-full transition-all">
            <FaMinus />
          </span>
          <input type="number" min={0} value={item.quantity} onChange={event => updateQuantity(item.product.id, Number(event.target.value))} className="font-semibold text-[#27272e] h-[26px] w-[30px] border-none text-center p-0 outline-none" />
          <span onClick={() => updateQuantity(item.product.id, item.quantity+1)} className="text-[10px] flex items-center justify-center cursor-pointer h-[26px] w-[26px] bg-[#f6f7fb] rounded-full transition-all">
            <FaPlus />
          </span>
        </div>
      </div>
    </li>
  );
}

export default SingleCartProduct;
