import Image from "next/image";
import Link from "next/link";
import { PiShoppingCartLight } from "react-icons/pi";
import { generateSlug } from "../GenerateSlug/GenerateSlug";

const ProductCard2 = ({ product, lineView }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    alert(`Button Clicked For ${product?.name}`);
  };

  return (
    <div className={`group border border-transparent hover:border-blue-600 rounded-lg relative ${lineView && "flex items-center"}`}>
      <Link href={`/product/${generateSlug(product?.name)}`} className={`${lineView && "w-[45%]"}`}>
        <div>
          <Image
            src={product.image}
            alt="product"
            className={`${!lineView && "w-[75%]"} mx-auto rounded-xl`}
          />
        </div>
      </Link>
      <div className={`${!lineView ?  "px-2" : "pr-2"} flex flex-col gap-2`}>
        <Link href={`/product/${generateSlug(product?.name)}`} className={`${!lineView && ""}`}>
          <p className="text-gray-500 text-sm hover:text-blue-600 cursor-pointer">
            {product.category}
          </p>
          <h4 className={`${!lineView && "mt-2"} font-normal hover:text-blue-600 cursor-pointer line-clamp-2`}>
            {product.name}
          </h4>
          <p className="text-sm mt-2 text-gray-500 font-extralight line-through">
            {product.regularPrice}
          </p>
        </Link>
        <div className={`flex items-center justify-between  pb-2`}>
          <p className="text-red-600 text-base font-medium">
            {product.salePrice}
          </p>
          <Link
            href={`/checkout/${generateSlug(product?.name)}`}
            className="bg-blue-600 px-2 py-1 text-sm flex items-center gap-1 text-white rounded-md"
          >
            <PiShoppingCartLight />
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
