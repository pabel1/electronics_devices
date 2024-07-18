import Image from "next/image";
import React from "react";
import StarRating from "../shared/StarRating/StarRating";
import Link from "next/link";
import { generateSlug } from "../GenerateSlug/GenerateSlug";

const ProductCard3 = ({ product }) => {
  return (
    <Link href={`/product/${generateSlug(product?.name)}`} className="flex flex-col md:flex-row md:items-center gap-2 mt-8">
      <Image
        src={product.image}
        alt={product.name}
        width={80}
        height={80}
        className="rounded-lg"
      />
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-semibold text-blue-600 text-center md:text-left">
          {product.name}
        </h3>
        <div className="flex items-center justify-center md:justify-start">
          <StarRating rating={product?.rating} />
        </div>
        <p className="font-light text-center md:text-left">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard3;
