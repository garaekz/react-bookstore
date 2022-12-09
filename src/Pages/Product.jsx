import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../Partials/RatingStars";
import { addProduct } from "../store/cartSlice";
import { AiOutlineShop } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProductCard from "../Partials/SingleProductCard";
import { TbTruckDelivery } from "react-icons/tb";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import service4 from "../assets/images/service4.png";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-[60px] md:pt-[80px] pb-5 md:pb-[30px] bg-[#f9f3f0]">
        <div className="px-[15px] md:max-w-[720px] w-full mx-auto">
          <div className="w-full">
            <div className="block bg-[#f7f7f7] rounded-lg overflow-hidden relative h-[800px] p-10 w-full mb-10">
              <img
                src={product.image}
                alt="product"
                className="rounded-lg max-h-[800px] h-full w-auto mx-auto object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div>
              <h2 className="mb-5 font-bold text-[26px] md:text-[30px]">{product.title}</h2>
              <div className="text-[20px] md:text-[24px] font-medium mb-5">
                ${product.price.toFixed(2)}
              </div>
              <div className="mb-5 text-2xl">
                <RatingStars rating={product.rating} />
              </div>

              <div className="flex justify-between mb-10 ">
                <button
                  onClick={() => dispatch(addProduct(product))}
                  className="block relative w-full text-center text-white bg-primary py-[15px] rounded-lg font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded-lg before:bg-primary before:z-[-1]"
                >
                  Add To Cart
                </button>
              </div>
              <div className="text-heading text-xl mb-5">
                <span className="font-medium text-heading">Genre:</span>{" "}
                {product.genre}
              </div>
              <div className="text-primary text-2xl mb-5 font-bold">
                Description
              </div>
              <div className="text-heading">{product.description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="px-[15px] md:max-w-[720px] w-full mx-auto">
          <div className="mb-5">
            <span className="text-light-primary font-bold flex items-center mb-[10px]">
              <span className="bg-light-primary rounded-full flex items-center justify-center text-white p-1 mr-3">
                <AiOutlineShop />
              </span>
              Related
            </span>
            <h2 className="text-[26px] font-bold">Related Products</h2>
          </div>
          <div>
            <Slider {...settings}>
              {related.map((product, index) => (
                <SingleProductCard key={index} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="md:max-w-[720px] mx-auto ">
        <div className="border-none flex text-left mb-[30px]">
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
        <div className="border-none flex text-left mb-[30px]">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service2} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">Money Back Guarantee</h6>
            <p className="text-body">
              100% money back guarantee.
            </p>
          </div>
        </div>
        <div className="border-none flex text-left mb-[30px]">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service3} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">24 Retun Policy</h6>
            <p className="text-body">
              No questions asked.
            </p>
          </div>
        </div>
        <div className="border-none flex text-left mb-[30px]">
          <div className="mr-5 mt-[6px] max-w-[45px]">
            <img src={service4} className="max-h-[60px] max-w-full h-auto" />
          </div>
          <div>
            <h6 className="font-bold">Professional Support</h6>
            <p className="text-body">
              24/7 Live support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
