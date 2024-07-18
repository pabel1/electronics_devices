"use client";
import { usePathname } from "next/navigation";
import BreadCrumbComponent from "../shared/Breadcumbs/BreadCrumbComponent";

const BreadCrumbersHeader = () => {
  const pathname = usePathname();
  const categoryPage = pathname.split("/")[2];
  return (
    <div>
      <BreadCrumbComponent categoryName={categoryPage} />
      <div className="pb-3 text-3xl font-semibold capitalize">
        {pathname.split("/")[2]}
      </div>
    </div>
  );
};

export default BreadCrumbersHeader;
