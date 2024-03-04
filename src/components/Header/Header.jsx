import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="w-full h-20 bg-gray-800 flex items-center justify-center">
      <div className="relative flex justify-evenly items-center w-full">
        {/* Search input */}
        <div className="flex items-center">
          <CiSearch size="20px" className="absolute ml-1" />
          <input
            type="text"
            className="w-[258px] rounded-lg sm:w-48 h-[37px] px-2"
          />
        </div>

        {/* Navigation menu */}
        <ul className="hidden sm:flex text-white list-none cursor-pointer">
          <li className="px-4 py-2 text-[14px] text-[#D1D6DA] ">Categories</li>
          <li className="px-4 py-2 text-[14px] text-[#D1D6DA]">
            Website Builders
          </li>
          <li className="px-4 py-2 text-[14px] text-[#D1D6DA]">
            Today's deals
          </li>
        </ul>

        {/* Responsive menu button */}
        <button className="sm:hidden text-white px-4 py-2">Menu</button>
      </div>
    </div>
  );
};

export default Header;
