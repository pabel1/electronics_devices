import Ad2 from "../ads/ad2/Ad2";
import Ad3 from "../ads/Ad3";
import BreadCrumbersHeader from "./BreadCrumbersHeader";

const Header = () => {
  return (
    <div className="flex ">
      <div className="w-[22%]">
        <BreadCrumbersHeader />
      </div>
      <div className="w-[78%]">
        <Ad2 className={'!my-2 md:!my-3'}/>
      </div>
    </div>
  );
};

export default Header;
