import { FaRegHeart, FaRegEye } from "react-icons/fa";

function SingleProduct({book}) {
  const calculateDiscount = (price, discount) => {
    return price - (price * discount) / 100;
  }

  return (
    <div className="px-4 w-full md:w-1/2 xl:w-1/3 max-w-full">
      <div className="group relative mb-8 text-center">
        {/* Thumbnail */}
        <div className="relative">
          <a
            href=""
            className="block bg-[#f7f7f7] rounded-lg overflow-hidden relative h-[400px] p-10 w-full"
          >
            <img
              src={book.image}
              alt="product" 
              className="rounded-lg max-h-[500px] h-full w-auto mx-auto object-cover group-hover:scale-110 transition duration-300"
            />
          </a>
          { book.discount > 0 && (
            <div className="absolute z-10 top-6 left-auto -right-[10px]">
              <div className="uppercase bg-primary pt-[6px] px-2.5 pb-[5px] text-xs text-white rounded-md shadow-discount font-bold">
                {`${book.discount}% off`}
              </div>
            </div>  
          )}
          <div className="invisible absolute opacity-0 inset-x-0 bottom-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 group-hover:bottom-[30px] group-hover:delay-200">
              <ul className="flex justify-center items-center m-[-5px]">
                  <li className="m-[5px]">
                    <a href="wishlist.html" className="relative block w-10 h-10 rounded text-sm duration-300 bg-white text-heading flex justify-center items-center before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-white z-10 before:z-[-1] before:text-[30px]">
                      <FaRegHeart />  
                    </a>
                  </li>
                  <li className="m-[5px]">
                    <a href="cart.html" className="relative block h-10 bg-secondary text-white font-bold rounded px-[18px] leading-[39px] before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-secondary z-10 before:z-[-1]">
                      Add to Cart
                    </a>
                  </li>
                  <li className="m-[5px]">
                    <a href="wishlist.html" className="relative block w-10 h-10 rounded duration-300 bg-white text-heading flex justify-center items-center before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-white z-10 before:z-[-1] before:text-[30px]">
                      <FaRegEye />  
                    </a>
                  </li>
              </ul>
          </div>
        </div>
        {/* Content */}
        <div className="py-6 relative">
          <h5 className="text-body mb-2.5 font-medium">
            <a href="#">{book.title}</a>
          </h5>
          <div className="-m-1">
            {
              book.discount > 0 ? (
                <>
                  <span className="text-heading text-xl font-bold mx-1">
                    {`$${(calculateDiscount(book.price, book.discount)).toFixed(2)}`}
                  </span>
                  <span className="text-[#d6d6d6] text-xl font-bold mx-1 line-through	">
                    ${book.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-heading text-xl font-bold mx-1">
                  ${book.price.toFixed(2)}
                </span>
              ) 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
