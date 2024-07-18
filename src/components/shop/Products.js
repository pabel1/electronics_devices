"use client";
import { filterProductsData } from "@/assets/data/productsData";
import { useState } from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import ProductCard2 from "../ProductCard/ProductCard2";
import { Checkbox } from "../ui/checkbox";

const Products = () => {
  const [lineView, setLineView] = useState(true);
  const toggleView = () => setLineView(!lineView)
  return (
    <div>
      {/* display filters  */}
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2 ">
          <CiGrid2H onClick={toggleView} className="text-3xl cursor-pointer" />
          <CiGrid41 onClick={toggleView} className="text-3xl text-secondPrimary cursor-pointer" />
        </div>
        <div className="text-gray-500 flex items-center gap-8">
          <div className="flex items-center gap-1">
            <Checkbox id={"onSale"} className={"!border-gray-500"} />
            <label htmlFor="onSale">Show only products on sale</label>
          </div>
          <div>
            <p>Sort by: Latest ^</p>
          </div>
          <div>
            <p>Show: 40 ^</p>
          </div>
        </div>
      </div>
      {/* products  */}
      <div className={`grid ${lineView ? " lg:grid-cols-2" : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"} mt-5 gap-3`}>
        {filterProductsData?.map((prod, i) => (
          <ProductCard2 lineView={lineView} key={i} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
