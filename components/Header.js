import Image from "next/image";
import React from "react";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import facebookimg from "@/public/Facebook_icon.png";
const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left */}
      <div className="flex min-w-fit">
        <Image src={facebookimg} height={40} width={40} alt="Facebook Logo" />
      </div>
      <div className="flex items-center space-x-2 ml-2 p-2 rounded-full bg-gray-100 text-gray-500">
        <HiOutlineSearch size={20} />
        <input
          className="hidden lg:inline-flex bg-transparent focus:outline-none"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
      {/* Center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-8 rounded-md hover:bg-gray-100 cursor-pointer ">
            <HiOutlineHome className="mx-auto text-blue-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-8 rounded-md hover:bg-gray-100 cursor-pointer ">
            <RiFlag2Line className="mx-auto text-blue-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-8 rounded-md hover:bg-gray-100 cursor-pointer ">
            <MdOutlineOndemandVideo
              className="mx-auto text-blue-500"
              size={25}
            />
          </div>
          <div className="flex items-center h-14 px-4 md:px-8 rounded-md hover:bg-gray-100 cursor-pointer ">
            <AiOutlineShop className="mx-auto text-blue-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-8 rounded-md hover:bg-gray-100 cursor-pointer ">
            <IoGameControllerOutline
              className="mx-auto text-blue-500"
              size={25}
            />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image src={facebookimg} height={40} width={40} alt="Avatar" />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-2 max-w-xs">
          Emily Qian
        </p>
        <CgMenuGridO
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
