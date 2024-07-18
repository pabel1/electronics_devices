import React from "react";
import HighlightedText from "../shared/HighlightedText/HighlightedText";
import Image from "next/image";
import img1 from "../../assets/images/WirelessSound.webp";

const AdSection = () => {
  return (
    <div className="lg:flex flex-col hidden gap-2">
      <div className="w-full h-[38vh] bg-[#CFDFEE] px-3 py-6">
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
          src={img1}
          alt="switch image"
          className="mt-5 w-[60%] mx-auto"
        ></Image>
      </div>
      <div className="w-full h-[38vh] bg-[#CFDFEE] px-3 py-6">
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
          src={img1}
          alt="switch image"
          className="mt-5 w-[60%] mx-auto"
        ></Image>
      </div>
    </div>
  );
};

export default AdSection;
