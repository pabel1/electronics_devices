import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";

const CategoryNav = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Laptops",
      link: "/shop/laptops",
    },
    {
      title: "Smartphone",
      link: "/shop/smartphones",
    },
    {
      title: "Headphones",
      link: "/shop/headphones",
    },
    {
      title: "Camera",
      link: "/shop/camera",
    },
  ];
  return (
    <div className="bg-white text-black">
      <div className="max-w-[1500px] lg:mx-auto md:mx-5 mx-[10px] border-b ">
        <div className="lg:mx-[50px] relative">
          <div className="flex gap-6 items-center">
            {/* <div className="bg-[#0068C8] flex items-center gap-x-8 text-white text-base font-medium py-1 px-5 rounded-full">
              <div className="flex items-center gap-x-4">
                <VscMenu className="text-base" />
                Shop Categories
              </div>
              <div className="">
                <MdKeyboardArrowDown className="text-xl p-0" />
              </div>
            </div> */}
            <div className="flex items-center gap-6 ">
              {/* <div className="flex items-center gap-1 group py-3">
                <HiOutlineHome className=" text-base font-thin" />
                <div className="flex items-center">
                  <p className=" leading-none font-medium text-base">Home</p>
                  <MdKeyboardArrowDown className="mt-1 font-extralight" />
                </div>
                <div className="absolute z-50 left-0 right-0 top-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                  <p className="bg-white shadow-xl rounded-b-md py-28 text-start ">
                    hello
                  </p>
                </div>
              </div> */}
              {menus?.map((menu, i)=><Link key={i} href={menu?.link} className= "border-2 border-transparent hover:text-[#ef4a23] hover:border-b-[#ef4a23] font-medium py-2.5 ">{menu.title}</Link>)}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
