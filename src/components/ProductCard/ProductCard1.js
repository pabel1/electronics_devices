'use client'
import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import Image from "next/image";
import img from "../../assets/images/WirelessSound-300x300.webp";
import Link from "next/link";
import { generateSlug } from "../GenerateSlug/GenerateSlug";

const ProductCard1 = ({ product }) => {

  return (
    <div className="group hover:shadow-md hover:border-gray-100 rounded-md border border-transparent relative px-4 pt-2 pb-3">
      <Link href={`/product/${generateSlug(product?.name)}`}>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <h4 className="mt- text-blue-600 font-semibold">{product.name}</h4>
        <Image src={img} alt="products" className="w-[60%] mx-auto mt-2" />
      </Link>
      <div className="flex justify-between items-center mt-3">
        <h2 className="text-lg text-gray-700">{product.price}</h2>
        <Link
          href={`/checkout/${generateSlug(product?.name)}`}
          className="bg-blue-600 px-3 py-1 text-sm flex items-center gap-1 text-white rounded-md"
        >
          <PiShoppingCartLight />
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard1;
