import { OfferTabsData } from "@/assets/data/productsData";
import ProductCard1 from "../ProductCard/ProductCard1";
import DynamicTabs from "../shared/DynamicTab/DynamicTab";

const OfferTab = ({hasOfferAd }) => {
  // console.log(hasOfferAd);
  const TabContent = ({ products }) => (
    <div className={`grid ${hasOfferAd ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"} mt-3 gap-5`}>
      {products.map((product, i) => (
        <ProductCard1 key={i} product={product} />
      ))}
    </div>
  );

  const tabs = OfferTabsData.map((tab) => ({
    title: tab.title,
    content: <TabContent products={tab.content} />,
  }));

  return (
    <div>
      <DynamicTabs tabs={tabs} isBorder={true} />
    </div>
  );
};

export default OfferTab;
