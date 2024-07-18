import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";
import camara from "../../assets/images/cameras.webp";
import desktop from "../../assets/images/desktop.webp";
import laptop from "../../assets/images/laptop.webp";

const DisplayCard = () => {
  return (
    <div className="mt-6 md:mt-12  grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-7">
      <div className="bg-gray-100 px-5 py-3 grid grid-cols-2 gap-2 items-center">
        <Image src={camara} alt="display products"></Image>
        <div>
          <h3 className="text-xl font-base">CATCH BIG DEALS ON THE CAMERAS</h3>
          <button className="mt-3 flex items-center gap-2">
            Shop now{" "}
            <div className="bg-blue-600 rounded-full mt-1">
              <MdOutlineNavigateNext />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 px-5 py-3 grid grid-cols-2 gap-2 items-center">
        <Image src={laptop} alt="display products"></Image>
        <div>
          <h3 className="text-xl font-base">CATCH BIG DEALS ON THE CAMERAS</h3>
          <button className="mt-3 flex items-center gap-2">
            Shop now{" "}
            <div className="bg-blue-600 rounded-full mt-1">
              <MdOutlineNavigateNext />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 px-5 py-3 grid grid-cols-2 gap-2 items-center">
        <Image src={desktop} alt="display products"></Image>
        <div>
          <h3 className="text-xl font-base">CATCH BIG DEALS ON THE CAMERAS</h3>
          <button className="mt-3 flex items-center gap-2">
            Shop now{" "}
            <div className="bg-blue-600 rounded-full mt-1">
              <MdOutlineNavigateNext />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
