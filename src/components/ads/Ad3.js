import Image from "next/image";
import img from "../../assets/images/samsung.jpg";

const Ad3 = ({}) => {
  return ( 
    <div className={`flex items-center justify-between border-2 bg-[#003366]`}>
      <div>
        <p className="text-xl font-medium">
          Grab your offer on our hottest deal
        </p>
      </div>
      <Image src={img} alt="offer image" className="w-24" />
    </div>
  );
};

export default Ad3;
