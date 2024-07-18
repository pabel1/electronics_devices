
import Image from "next/image";
import Link from "next/link";

const TopBannerSliderContent = ({ data }) => {
  return (
    <div className={`relative w-full `} >
      <Image
        src={data?.img}
        alt="slider image"
        className="rounded-lg w-full"
        width={900}
        height={600}
      />
      <div className= {`absolute inset-0 flex items-center text-white `}>
        <div
          className="w-1/2 pl-8 md:pl-14"
        >
          <p className="bg-red-700 text-xs md:text-sm px-4 inline-block rounded rounded-tl-none uppercase">
            {data?.tag}
          </p>
          <h3 className="text-2xl md:text-5xl font-bold md:mt-5 ">{data?.title}</h3>
          <p className="text-xs md:text-sm uppercase mt-1 md:mt-2 text-gray-100">
            {data?.details}
          </p>
          <p className="mt-2 md:mt-4 flex items-center gap-2 text-sm md:text-base">
            From{" "}
            <span className="text-yellow-400 text-xl md:text-3xl font-semibold">
              ${data?.price}
            </span>
          </p>
          <Link
            href={"#"}
            className="bg-blue-700 inline-block uppercase text-xs md:text-sm font-medium px-3 md:px-5 py-1.5 md:py-3 mt-3 rounded-md"
          >
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBannerSliderContent;
