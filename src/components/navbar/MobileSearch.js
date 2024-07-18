"use client";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <LuSearch
        onClick={toggleDrawer}
        className="text-xl md:hidden cursor-pointer"
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        size={350}
      >
        <div className="text-gray-700 p-5 ">
          <div className="flex items-center justify-between">
            <h3>Search Your Product</h3>
            <div
              onClick={toggleDrawer}
              className="bg-gray-100 hover:bg-gray-200 p-1 rounded-md cursor-pointer"
            >
              <RxCross2 className="text-xl" />
            </div>
          </div>
          <div className="flex items-center mt-5">
            
            <input
              type="text"
              placeholder="Product Name"
              className=" w-full rounded-r-none placeholder-gray-400/70 text-sm rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
            />
            <p className="py-2 px-3 text-gray-500 bg-gray-100 border border-l-0 rounded-r-lg text-sm cursor-pointer">
              Search
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileSearch;
