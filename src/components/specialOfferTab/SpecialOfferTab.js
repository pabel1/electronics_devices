import Offer from "./Offer";
import OfferTab from "./OfferTab";

const SpecialOfferTab = () => {
  const offerAd = [1];
  return (
    <div className="flex flex-col md:flex-row  justify-between gap-8 mt-12 ">
      {offerAd?.length > 0 && (
        <div className="border-2 w-full md:w-1/3 p-5 rounded-lg border-blue-600 h-fit">
          <Offer />
        </div>
      )}
      <div className={`${offerAd?.length > 0 ? "w-full md:w-2/3 " : "w-full  "}`}>
        <OfferTab hasOfferAd={offerAd?.length > 0 }/>
      </div>
    </div>
  );
};

export default SpecialOfferTab;
