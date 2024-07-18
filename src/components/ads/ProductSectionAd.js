import Image from "next/image";
import switchImg from "../../assets/images/switch.png";
import HighlightedText from "../shared/HighlightedText/HighlightedText";

const ProductSectionAd = () => {
  return (
    
      <div className="w-full">
        <div className="mt-[48px] w-full bg-[#CFDFEE] p-3 py-10">
          <div className="flex justify-center">
            <HighlightedText>Offer</HighlightedText>
          </div>
          <h3 className="text-lg font-medium text-center mt-3">
            Nintendo Switch
          </h3>
          <p className="text-gray-400 text-sm line-through text-center">
            $110.00
          </p>
          <p className="text-center text-base font-semibold text-yellow-800">
            $100.00
          </p>
          <Image
            src={switchImg}
            alt="switch image"
            className="mt-5 md:w-[60%] w-[40%] mx-auto"
          ></Image>
        </div>
      </div>
    
  );
};

export default ProductSectionAd;
