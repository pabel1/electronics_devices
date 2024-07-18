import React from "react";
import DynamicTabs from "../shared/DynamicTab/DynamicTab";
import productDetailsData from "@/assets/data/productDetailsData";

const ProductDescription = () => {
  // Create a new array with the content properly formatted for DynamicTabs
  const formattedTabs = productDetailsData.map((tab) => ({
    title: tab.title,
    content: (
      <div>
        {tab.title === "Accessories" && (
          <>
            <h3 className="text-xl font-semibold mb-4">
              {tab.content.heading}
            </h3>
            <ul className="list-disc pl-5">
              {tab.content.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {tab.title === "Description" && (
          <>
            <p>{tab.content.description}</p>
            <p className="mt-2">{tab.content.keyFeaturesHeading}</p>
            <ul className="list-disc pl-5 mt-2">
              {tab.content.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        {tab.title === "Specification" && (
          <table className="w-full border-collapse">
            <tbody>
              {tab.content.specifications.map((spec, index) => (
                <tr key={index} className="border-b">
                  <td className="font-semibold py-2">{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {tab.title === "Reviews" && (
          <>
            <h3 className="text-xl font-semibold mb-4">
              {tab.content.heading}
            </h3>
            <div className="space-y-4">
              {tab.content.reviews.map((review, index) => (
                <div key={index}>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    ),
  }));

  return (
    <div>
      <DynamicTabs
        tabs={formattedTabs}
        isBorder={true}
        tabsContainerClassName="w-full lg:gap-8 justify-center"
        activeTabClassName="font-bold"
        inactiveTabClassName="font-medium"
        contentClassName="px-8 py-14 border h-[50vh] rounded-xl mt-4"
      />
    </div>
  );
};

export default ProductDescription;
