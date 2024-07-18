'use client'

import { landingSliderData } from "@/assets/data/landipageSliderData";
import Slider from "../shared/Slider/Slider";
import TopBannerSliderContent from "../shared/Slider/TopBannerSliderContent";

const BannerSlide = () => {
  return (
    <div>
      <Slider
        data={landingSliderData}
        effect={"fade"}
        pagination
        autoplay={{delay: 5000,
          disableOnInteraction: false,}}
      >
        {(sliderData) => <TopBannerSliderContent data={sliderData} />}
      </Slider>
    </div>
  );
};

export default BannerSlide;
