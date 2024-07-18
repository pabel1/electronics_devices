import Image from "next/image";
import ad from "../../../assets/images/banner-18.jpg";

const Ad2 = ({ className }) => {
  return (
    <div className={`my-8 md:my-12 rounded-md relative ${className}`}>
      <Image
        src={ad}
        alt="product ad"
        className="rounded-lg min-h-28 object-cover"
      ></Image>
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-self-center gap-2 md:gap-12 text-xl text-white font-medium">
        <div className="text-sm sm:text-lg">Summer Sale Discount Off 35%</div>
        <div className="border md:border-2 border-dashed px-5 md:px-8 py-2 md:py-3 rounded-full capitalize text-sm md:text-lg">
          SALEOFF-35
        </div>
        <div className="text-sm sm:text-lg">
          Freeship for all Orders From $399
        </div>
      </div>
    </div>
  );
};

export default Ad2;
