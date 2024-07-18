import Image from "next/image";
import console from "../../assets/images/switch.png";

const Offer = () => {
  return (
    <div className="">
      <h3 className="text-xl md:text-2xl text-gray-700">Special Offer</h3>
      <Image
        src={console}
        alt="special offer"
        className="mt-5 w-[50%] mx-auto"
      ></Image>
      <p className="text-center mt-5 text-blue-600 font-semibold">
        Game Console Controller + USB 3.0 Cable
      </p>
      <h2 className="text-2xl md:text-3xl text-center mt-2 text-gray-700">$99.00</h2>
      <div className="flex justify-between items-center mt-2 md:mt-5 ">
        <p>
          Already Sold: <span className="font-semibold">76</span>
        </p>
        <p>
          Available: <span className="font-semibold">24</span>
        </p>
      </div>
      <div className="mt-3 relative bg-gray-200 h-2 md:h-3 rounded-lg z-0">
        <div className="absolute inset-0 w-[75%] z-20 h-2 md:h-3 bg-blue-600 rounded-lg"></div>
      </div>
      <p className="text-center mt-4">Hurry Up! Offer ends in:</p>
      <div className="mt-3 text-gray-800 flex justify-center gap-3 items-center mb-3">
        <div className="bg-gray-200 rounded px-3 py-2 ">
          <h2 className="text-center text-xl font-bold">09</h2>
          <p className="text-sm -mt-1">Hours</p>
        </div>
        <div className="bg-gray-200 rounded px-3 py-2">
          <h2 className="text-center text-xl font-bold">32</h2>
          <p className="text-sm -mt-1">Mins</p>
        </div>
        <div className="bg-gray-200 rounded px-3 py-2">
          <h2 className="text-center text-xl font-bold">09</h2>
          <p className="text-sm -mt-1">Secs</p>
        </div>
      
      </div>
    </div>
  );
};

export default Offer;
