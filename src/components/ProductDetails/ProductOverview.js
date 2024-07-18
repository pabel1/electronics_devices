import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";
import StarRating from "../shared/StarRating/StarRating";
import ImageZoom from "../ImageZoom/ImageZoom";
import img1 from "../../assets/images/WirelessSound.webp";
import { generateSlug, removeSlug } from "../GenerateSlug/GenerateSlug";
import { FiZoomIn } from "react-icons/fi";
import Slider from "../shared/Slider/Slider";
import Link from "next/link";

const sliderData = [{ img: img1 }, { img: img1 }, { img: img1 }];

const ProductOverview = ({ productId }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const productName = removeSlug(productId);
  const stock = 1;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="h-auto lg:h-[76vh] flex flex-col relative items-center justify-center border rounded-md">
        <Slider
          data={sliderData}
          navigation={true}
          pagination
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {(sliderData) => {
            console.log(sliderData.img);
            return (
              <ImageZoom
                src={sliderData.img.src}
                alt="image"
                isZoomed={isZoomed}
                setIsZoomed={setIsZoomed}
              />
            );
          }}
        </Slider>
        <div className="absolute top-4 left-4 py-1 px-4 text-white rounded-md rounded-tl-none bg-blue-700 opacity-90">
          <h1>-26%</h1>
        </div>

        <buttom
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsZoomed(true)}
        >
          <FiZoomIn className="text-2xl" />
        </buttom>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-gray-500 text-sm">Bluetooth Speakers</p>
          <h1 className="text-xl lg:text-3xl font-normal">{productName}</h1>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center gap-1">
              <StarRating rating="4.0" />
            </div>
            <p>(4.00)</p>
            <p>1 Review</p>
            <p>
              {stock ? (
                <span className="uppercase text-green-400 border border-green-400 rounded-md py-1 px-3 font-semibold text-xs">
                  {stock} In Stock
                </span>
              ) : (
                <span className="uppercase text-red-400 border border-red-400 rounded-md py-1 px-3 font-semibold text-xs">
                  Out of Stock
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-b pb-4">
          <div className="flex items-center gap-4">
            <p className="text-3xl text-red-600 font-medium">$699.99</p>
            <p className="text-xl text-gray-500 font-extralight line-through">
              $949.99
            </p>
            <p className="text-xl">(-26%)</p>
          </div>
          <p className="text-lg text-gray-400">
            Fast charging 18W, 50% in 30 min USB Power Delivery 2.0nQi wireless
            charging
          </p>
          <ul className="px-8 py-4 list-disc rounded-lg bg-sky-100 text-sky-600 flex flex-col gap-2">
            <li>Estimated delivery time 14-30 days</li>
            <li>18 months warranty at Genuine Warranty Center.</li>
            <li>Use coupon SS23 to get extra $23 off (only this product)</li>
          </ul>
          <div className="flex items-center justify-between">
            <Link href={`/checkout/${productId}`} className="px-4 py-2 text-center rounded-md bg-blue-600 hover:bg-white border border-transparent hover:border-blue-600 hover:text-blue-600 text-white uppercase font-semibold text-sm">
              Buy Now
            </Link>
            <div className="flex items-center gap-8 text-gray-600">
              <button className="flex items-center gap-1 font-medium hover:text-sky-600">
                <IoIosHeartEmpty className="text-xl" />
                Add to wishlist
              </button>
              <button className="flex items-center gap-1 font-medium hover:text-sky-600">
                <RiStackLine className="text-xl" />
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
