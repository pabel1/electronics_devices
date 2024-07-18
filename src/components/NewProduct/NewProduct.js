import { newProducts, newProductsCategories } from "@/assets/data/productsData";
import { MdNavigateNext } from "react-icons/md";
import DynamicTabs from "../shared/DynamicTab/DynamicTab";
import ProductSlider from "./ProductSlider";
import ProductSectionAd from "../ads/ProductSectionAd";

const NewProduct = ({ title }) => {
  const ad = [1];
  // Group products by category
  const productsByCategory = newProductsCategories?.map((category) => ({
    title: category,
    content: newProducts?.filter((product) => product.category === category),
  }));

  // Generate tab data
  const tabs = productsByCategory.map((category) => ({
    title: category.title,
    content: (
      <div className="mt-2">
        <ProductSlider
          data={category.content}
          sliderPerView={2}
          slides={ad?.length > 0 ? 5 : 6}
        ></ProductSlider>
      </div>
    ),
  }));

  return (
    <div className="mt-12">
      {/* header and tab */}
      <div className="flex flex-col lg:flex-row  justify-between gap-3 ">
        <div className={`${ad?.length > 0 ? "w-full lg:w-[78%]" : "w-full"}`}>
          <DynamicTabs tabs={tabs} optionTitle={title} />
          <div className="flex justify-end">
            <button className="bg-transparent group flex items-center gap-1 text-gray-800 text-sm px-3 py-1 rounded-full">
              See All
              <MdNavigateNext className="group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>
        </div>
        {ad?.length > 0 && (
          <div className="w-full lg:w-[22%]">
            <ProductSectionAd />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProduct;
