"use client";

import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../assets/styles/slider.css";
const Slider = ({
  data,
  children,
  breakpoints,
  slidesPerView,
  spaceBetween,
  effect,
  navigation,
  pagination,
  autoplay,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const autoPlaySetting = autoplay
    ? typeof autoplay === "object"
      ? { ...autoplay, disableOnInteraction: false }
      : { delay: 3000, disableOnInteraction: false }
    : false;
  return (
    <Swiper
      slidesPerView={slidesPerView || 1}
      spaceBetween={spaceBetween || 30}
      effect={effect || false}
      loop={true}
      navigation={navigation || false}
      autoplay={autoPlaySetting}
      pagination={
        pagination
          ? {
              clickable: true,
            }
          : false
      }
      {...(breakpoints && { breakpoints })}
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      {data?.map((slideData, i) => (
        <SwiperSlide key={i}>{children(slideData)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
