"use client";
import ProductCard2 from "../ProductCard/ProductCard2";
import Slider from "../shared/Slider/Slider";

const ProductSlider = ({ data, slides, sliderPerView }) => {
  // console.log(slides)
  return (
    <div>
      <Slider
        data={data}
        slidesPerView={sliderPerView}
        spaceBetween={5}
        autoplay={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: slides,
            spaceBetween: 5,
          },
        }}
      >
        {(slideData) => <ProductCard2 product={slideData} />}
      </Slider>
    </div>
  );
};

export default ProductSlider;
