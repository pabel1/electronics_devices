import Image from "next/image";
import React from "react";
import ad from "../../assets/images/footer-widget-img-01.webp";
import { products, productTypes } from "@/assets/data/overviewProducts";
import ProductCard3 from "../ProductCard/ProductCard3";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const OverviewProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 my-12 gap-8">
      <div className="md:col-span-6 col-span-full md:flex md:justify-between md:gap-8">
        {productTypes.map((type) => (
          <div key={type.id} className="w-full">
            <div className="relative flex items-center justify-between border-b-2 border-gray-300 mt-8 lg:mt-0 pb-2">
              <h1 className="text-xl font-light">
                {type.name}
              </h1>
              <Link href={`/`} className="text-2xl hover:text-blue-600"><IoIosArrowRoundForward /></Link>
              <div className="absolute -bottom-0.5 border-b-2 w-20 border-blue-600"></div>
            </div>
            {products
              .filter((product) => product.typeId === type.id)
              .map((product) => (
                <ProductCard3 key={product.id} product={product} />
              ))}
          </div>
        ))}
      </div>
      <div className="md:col-span-2 col-span-full flex items-center mt-8 md:mt-0">
        <Image src={ad} alt="Ad" />
      </div>
    </div>
  );
};

export default OverviewProducts;
