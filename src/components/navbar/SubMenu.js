import Link from "next/link";

const SubMenu = ({ children, link, menus }) => {
  return (
    <div>
      <div className=" cursor-pointer group transition-all duration-200 ease-linear">
        <p className="py-2 flex items-center">
          <Link href={link}>{children}</Link>
          {/* {menus && (
            <MdArrowDropDown className="group-hover:rotate-180 transition-all duration-150 ease-linear" />
          )} */}
        </p>
        {menus && (
          <ul className="absolute hidden group-hover:block bg-white text-gray-500 min-w-[200px] z-20 shadow border border-gray-200 rounded p-2 transition-all duration-500 ease-linear">
            {menus?.map((menu, i) => (
              <Link
                href={menu?.link}
                key={i}
                className="hover:text-primary text-sm w-full block hover:bg-gray-100 p-2 rounded transition-all duration-200 ease-linear"
              >
                {menu?.title}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
