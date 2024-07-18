"use client";
import React, { useState } from "react";

const DynamicTabs = ({ 
  tabs, 
  optionTitle, 
  isBorder,
  containerClassName = "",
  tabsContainerClassName = "",
  activeTabClassName = "",
  inactiveTabClassName = "",
  contentClassName = ""
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`w-full ${containerClassName}`}>
      <div className="flex items-center justify-between flex-wrap border-b -mt-1 border-gray-200">
        {optionTitle && (
          <div>
            <h1 className="text-3xl pb-4 font-semibold">{optionTitle}</h1>
          </div>
        )}
        <div className={`flex ${tabsContainerClassName}`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`pb-2 px-4 focus:outline-none ${
                activeTab === index
                  ? `${isBorder && 'border-b-2'} font-semibold border-blue-500 text-blue-600 ${activeTabClassName}`
                  : `text-gray-500 hover:text-gray-700 ${inactiveTabClassName}`
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className={`py-2 ${contentClassName}`}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default DynamicTabs;