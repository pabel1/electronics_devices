import Image from "next/image";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { SlEarphonesAlt } from "react-icons/sl";
import logo from "../../assets/images/logo.png";
import MobileSearch from "./MobileSearch";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"

const SearchNav = () => {
  return (
    <div className="max-w-[1500px] flex grid-cols-6 items-center justify-between gap-8 py-2 sm:py-3 lg:mx-auto lg:px-[50px] md:mx-5 mx-[10px]">
      {/* Logo */}
      <Link href={"/"} className="col-span-2 flex items-center gap-2">
        <Image src={logo} alt="logo" className=" xl:w-7 w-6" />
        <h1 className="text-base md:text-lg lg:text-xl mt-3 uppercase font-serif font-bold">
          Dhakay
        </h1>
      </Link>

      {/* Search */}
      <div className="hidden md:flex items-center divide-x-2 p-2 divide-gray-300 col-span-2 relative bg-white rounded-md">
        {/* <div className="px-1 w-32">
          <Select>
            <SelectTrigger className="text-black">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Français">Category1</SelectItem>
              <SelectItem value="Français">Category2</SelectItem>
              <SelectItem value="Français">Category3</SelectItem>
              <SelectItem value="Français">Category4</SelectItem>
              <SelectItem value="Français">Category5</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        <input
          type="text"
          placeholder="Search for products"
          className="text-gray-600 pl-4 md:w-64 lg:w-80 bg-transparent focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-500 rounded-r-md absolute flex items-center px-4 cursor-pointer right-0 h-full uppercase text-sm font-medium">
          Search
        </button>
      </div>

      {/* Profile and Cart */}
      <div className="flex col-span-2 items-center justify-end gap-14">
        {/* <div className="relative">
          <IoIosHeartEmpty className="text-3xl" />
          <h1 className="absolute bottom-4 left-5 p-1 flex items-center justify-center rounded-full bg-blue-600 text-white h-5 w-5 text-sm">
            0
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <FiUser className="text-3xl" />
          <div className="leading-none">
            <h1 className="text-[10px] font-light text-gray-300">My Account</h1>
            <button className="font-medium text-sm">Login</button>
          </div>
        </div> */}

        <div className="flex items-center gap-5">
         <MobileSearch/>
          <div className="flex items-center gap-2 sm:gap-3">
            <SlEarphonesAlt className="md:text-3xl text-base" />
            <div>
              <h1 className="text-[8px] sm:text-[10px] font-light text-gray-300">
                Need Help?
              </h1>
              <p className="font-normal sm:font-medium text-xs sm:text-sm ">
                +08 9229 8228
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
