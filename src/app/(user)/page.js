import Ad2 from "@/components/ads/ad2/Ad2";
import CompanyFeatures from "@/components/CompanyFeatures/CompanyFeatures";
import Description from "@/components/Description/Description";
import DisplayCard from "@/components/displayCard/DisplayCard";
import NewProduct from "@/components/NewProduct/NewProduct";
import OverviewProducts from "@/components/OverviewProducts/OverviewProducts";
import SpecialOfferTab from "@/components/specialOfferTab/SpecialOfferTab";
import TopLandingAd from "@/components/TopLandingAd/TopLandingAd";
import TopLandingBanner from "@/components/TopLandingBanner/TopLandingBanner";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1500px] lg:mx-auto lg:px-[50px] md:mx-5 mx-[10px]">
        <TopLandingBanner />
        <TopLandingAd />
        <DisplayCard />
        <SpecialOfferTab />
        <NewProduct title={"New Products"} />
        <Ad2 />
        <NewProduct title={"Best sellers"} />
        <Ad2 />
        <OverviewProducts />
        <CompanyFeatures />
        <Description />
      </div>
    </main>
  );
}
