import Filters from "@/components/shop/Filters";
import Header from "@/components/shop/Header";

const ShopLayout = ({ children }) => {
  return (
    <section className="max-w-[1500px] lg:mx-auto lg:px-[50px] md:mx-5 mx-[10px] ">
      <Header />
      <div className="flex w-full divide-x pt-5 pb-8">
        <aside className="w-[22%] p-3">
          <Filters />
        </aside>
        <div className="w-[78%]">{children}</div>
      </div>
    </section>
  );
};

export default ShopLayout;
