"use client";
import { useParams } from "next/navigation";
import OverviewProducts from "../OverviewProducts/OverviewProducts";
import Ad2 from "../ads/ad2/Ad2";
import AdSection from "./AdSection";
import LatestProducts from "./LatestProducts";
import ProductDescription from "./ProductDescription";
import ProductOverview from "./ProductOverview";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div className="max-w-[1500px] flex flex-col py-6 lg:mx-auto lg:px-[50px] md:mx-5 mx-[10px]">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8 lg:order-1 order-2">
          <AdSection />
          <LatestProducts title="Latest Products" />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8 lg:order-2 order-1">
          <ProductOverview productId={productId} />
          <ProductDescription />
          <LatestProducts title="Related Products" />
        </div>
      </div>
      <div>
        <Ad2 />
        <OverviewProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
