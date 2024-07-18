import Image from "next/image";
import { SlEarphonesAlt } from "react-icons/sl";
import logo from "../../assets/images/logo.png";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import Link from "next/link";

const about = [
  { name: "About Us" },
  { name: "News & Blog" },
  { name: "Brands" },
  { name: "Advertising" },
  { name: "Investors" },
];
const support = [
  { name: "Support Center" },
  { name: "Manage" },
  { name: "Service" },
  { name: "Security Center" },
  { name: "Contact Us" },
];
const order = [
  { name: "Support Center" },
  { name: "Manage" },
  { name: "Service" },
  { name: "Security Center" },
  { name: "Contact Us" },
];

const contactUs = [
  { name: "Support Center" },
  { name: "Manage" },
  { name: "Service" },
  { name: "Security Center" },
  { name: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-[#050C2E] text-white">
      <div className="max-w-[1500px] lg:mx-auto lg:px-[50px] md:mx-5 mx-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 lg:items-center">
          <div className="flex flex-col gap-8 col-span-2">
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-4">
              <Link href={"/"} className="col-span-2 flex items-center gap-2">
                <Image src={logo} alt="logo" className="h-9 w-9" />
                <h1 className="text-xl mt-3 uppercase font-serif font-bold">
                  Dhakay
                </h1>
              </Link>

              <div className="flex items-center gap-4">
                <SlEarphonesAlt className="text-3xl text-blue-600" />
                <div>
                  <h3 className="text-sm text-gray-500">
                    Got Questions ? Call us 24/7!
                  </h3>
                  <p className="text-sm lg:text-xl">
                    (800) 8001-8588, (0600) 874 548
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">Contact Info</h1>
              <p className="font-light">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>

          <div className="col-span-3 lg:flex grid grid-cols-2 lg:items-center justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-semibold">About Us</h1>
              <div className="flex flex-col gap-3">
                {about.map((links, index) => {
                  return (
                    <Link key={index} href="/" className="text-gray-300 hover:text-blue-600">
                      {links.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-semibold">Support</h1>
              <div className="flex flex-col gap-3">
                {support.map((links, index) => {
                  return (
                    <Link key={index} href="/" className="text-gray-300 hover:text-blue-600">
                      {links.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-semibold">Order</h1>
              <div className="flex flex-col gap-3">
                {contactUs.map((links, index) => {
                  return (
                    <Link key={index} href="/" className="text-gray-300 hover:text-blue-600">
                      {links.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-lg font-semibold">Customer Care</h1>
              <div className="flex flex-col gap-3">
                {contactUs.map((links, index) => {
                  return (
                    <Link key={index} href="/" className="text-gray-300 hover:text-blue-600">
                      {links.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12 pt-12">
          <h1 className="">
            <span className="font-semibold">©Dhakay</span> - All Rights Reserved
          </h1>

          <div className="flex items-center gap-4">
            <FaPaypal className="text-2xl text-[#fff]" />
            <FaCcVisa className="text-2xl text-[#fff]" />
            <FaCcMastercard className="text-2xl text-[#fff]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
