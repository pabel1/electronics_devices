"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";

const BreadCrumbComponent = ({ categoryName }) => {
  return (
    <Breadcrumb className={"py-5"}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/shop"}>shop</Link>
          </BreadcrumbLink>
        </BreadcrumbItem> */}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{categoryName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
