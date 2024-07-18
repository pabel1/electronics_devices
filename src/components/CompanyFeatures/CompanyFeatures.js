import { IoCar } from "react-icons/io5";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { SlEarphonesAlt } from "react-icons/sl";

const CompanyFeatures = ({className}) => {
  return (
    <div className={`grid grid-cols-2  md:grid-cols-4 gap-6 my-6 md:my-16 ${className}`}>
      <div className="flex justify-start md:justify-center items-center gap-3">
        <IoCar className="text-5xl text-secondPrimary"/>
        <div>
            <h4 className="text-lg font-semibold text-gray-700">Free Shipping</h4>
            <p className="text-sm text-gray-700">Orders over $100</p>
        </div>
      </div>
      <div className="flex justify-start md:justify-center items-center gap-3">
        <RiMoneyEuroCircleFill className="text-5xl text-secondPrimary"/>
        <div>
            <h4 className="text-lg font-semibold text-gray-700">Money Returns</h4>
            <p className="text-sm text-gray-700">Within 30 days</p>
        </div>
      </div>
      <div className="flex justify-start md:justify-center items-center gap-3">
        <GrSecure className="text-5xl text-secondPrimary"/>
        <div>
            <h4 className="text-lg font-semibold text-gray-700">Payment</h4>
            <p className="text-sm text-gray-700">100% payment security</p>
        </div>
      </div>
      <div className="flex justify-start md:justify-center items-center gap-3">
        <SlEarphonesAlt className="text-5xl text-secondPrimary"/>
        <div>
            <h4 className="text-lg font-semibold text-gray-700">SUPPORT 24/7</h4>
            <p className="text-sm text-gray-700">Support online 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFeatures;
