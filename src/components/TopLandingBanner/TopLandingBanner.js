import Image from "next/image";
import deals from "../../assets/images/slide3-camera-lens.jpg";
import game from "../../assets/images/switch.png";
import Slider from "../shared/Slider/Slider";
import TopBannerSliderContent from "../shared/Slider/TopBannerSliderContent";
import { landingSliderData } from "@/assets/data/landipageSliderData";
import BannerSlide from "./BannerSlide";

const TopLandingBanner = () => {
  return (
    <div className=" mt-2 grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* slider  */}
      <div
        className="lg:col-span-2 relative rounded-lg w-full"
        // style={{ backgroundImage: `url("/slide3-camera-lens.jpg")` }}
      >
          <BannerSlide/>  
      </div>
      {/* ad  */}
      <div className="bg-[#CFDFEE] px-16 py-5 flex items-center justify-center rounded-lg">
        <div>
          <div className="flex justify-center">
            <p className="bg-red-700 text-white text-xs md:text-sm px-4 inline-block rounded rounded-tl-none">
              MONTH DEALS
            </p>
          </div>
          <p className="text-center text-2xl md:text-3xl font-semibold mt-2">
            Nintendo Switch
          </p>
          <p className="text-center font-medium mt-2 mb-5">TODAY’S SUPER OFFER</p>
          <Image src={game} alt="best deals" className="md:w-[90%] mx-auto w-[60%]"></Image>
        </div>
      </div>
    </div>
  );
};

export default TopLandingBanner;
