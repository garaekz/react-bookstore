import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SingleProductCard from "./SingleProductCard";

function RelatedProducts({ related, settings }) {
  return (
    <div className="bg-white pb-[50px] pt-[10px]">
      <div className="px-[15px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto">
        <div className="mb-10">
          <span className="text-light-primary font-bold flex items-center mb-[10px]">
            <div className="bg-light-primary rounded-full flex items-center justify-center text-white p-1 mr-3">
              <AiOutlineShop />
            </div>
            Related
          </span>
          <h2 className="text-[26px] lg:text-[36px] text-heading font-bold mb-[30px]">Related Products</h2>
          <Slider {...settings}>
            {related.map((product) => (
              <SingleProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
