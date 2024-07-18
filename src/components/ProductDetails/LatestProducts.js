import { products } from "@/assets/data/overviewProducts";
import React from "react";
import ProductCard3 from "../ProductCard/ProductCard3";
import ProductCard1 from "../ProductCard/ProductCard1";

const LatestProducts = ({ title }) => {
  const latestProducts = products.filter((product) => product.isLatest);
  const relatedProducts = products.filter((product) => product.isRelated);

  return (
    <div>
      <div className="relative">
        <h1 className="text-xl font-light border-b-2 border-gray-300 pb-2">
          {title}
        </h1>
        <div className="absolute bottom-0 border-b-2 w-20 border-blue-600"></div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {title === "Latest Products" &&
          latestProducts.map((product) => (
            <ProductCard3 key={product.id} product={product} />
          ))}
        <div className="grid grid-cols-1 lg:grid-cols-4 my-6 gap-8">
          {title === "Related Products" &&
            relatedProducts.map((product) => (
              <ProductCard1 key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
