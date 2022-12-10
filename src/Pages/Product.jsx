import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../store/cartSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedProducts from "../Partials/RelatedProducts";

function Product() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.books).find(
    (product) => product.slug === slug
  );
  const related = useSelector((state) => state.books).filter(
    (product) =>
      (product.category === product.category ||
        product.author === product.author) &&
      product.slug !== slug
  );
  const calculateDiscount = (price, discount) => {
    return price - (price * discount) / 100;
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-[80px] pb-[80px]">
        <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto flex flex-wrap">
          <div className="2xl:-mx-[50px] w-full flex flex-wrap">
            {/* Image */}
            <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
              <div className="h-full">
                <div className="sticky top-[100px] z-0">
                  <div className="relative">
                    <div className="relative block">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full rounded-md h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
              <div className="h-full">
                <div className="sticky top-[100px] z-0">
                  <div className="block">
                    <div>
                      <h2 className="text-dark font-bold text-[26px] md:text-[30px]">
                        {product.title}
                      </h2>
                      <h6 className="mb-5 font-medium text-[20px] text-body">
                        {product.author}
                      </h6>
                      {product.discount > 0 ? (
                        <div className="flex">
                          <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 mr-4">
                            {`$${calculateDiscount(
                              product.price,
                              product.discount
                            ).toFixed(2)}`}
                          </div>
                          <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 line-through	text-[#d6d6d6] ">
                            ${product.price.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5">
                          ${product.price.toFixed(2)}
                        </div>
                      )}
                      <div className="flex justify-between mb-10">
                        <button
                          onClick={() => dispatch(addProduct(product))}
                          className="block relative w-full text-center text-white bg-primary py-[15px] rounded-md font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-300 hover:before:scale-105 before:rounded-md before:bg-primary before:z-[-1]"
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="border-b border-light my-[30px] pb-[30px] flex items-center">
                        <span className="text-[20px] font-medium text-heading">Genre: </span> <span className="ml-2 text-body text-lg">{product.genre}</span>
                      </div>
                      <div className="mt-[80px]">
                        <h4 className="text-primary font-bold text-[24px] mb-10">Description</h4>
                        <p className="text-body">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <RelatedProducts settings={settings} related={related} />
    </>
  );
}

export default Product;
