import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const Subheader = () => {
  return (
    <div className="w-full flex flex-col items-center mt-5 ">
      {/* Title */}
      <div className="w-3/4 h-[60px] text-[48px] flex  text-[#2C384A]">
        Best Website builders in the US
      </div>

      {/* Divider */}
      <div className="w-3/4 h-1 border-2 border-gray-300 mt-4"></div>

      {/* Subheader Info Section */}
      <div className="w-3/4  flex justify-between mt-3">
        {/* Left Info Section */}
        <div className="flex items-center  gap-5 text-sm">
          {/* Last Updated */}
          <div className="flex items-center gap-1">
            <IoCheckmarkCircleOutline size="18px" />
            <span className="text-[14px]">
              Last Updated - February 22, 2020
            </span>
          </div>
          {/* Advertising Disclosure */}
          <div className="flex items-center gap-1">
            <CiCircleInfo size="18px" />
            <p className="text-[14px]">Advertising Disclosure</p>
          </div>
        </div>

        {/* Right Dropdown Section */}
        <div className=" flex text-sm">
          <p className="text-[14px]">Top Relevant</p>
          <RiArrowDropDownLine size="25" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-3/4 h-1 border-2 border-gray-300 mt-2"></div>

      {/* Button Section */}
      <div className="w-3/4 ">
        <div className="w-3/4  py-2 text-sm flex flex-wrap justify-center md:justify-between">
          {/* Buttons */}
          <button className="rounded hover:border border-blue-500 w-24 h-8 mb-2 md:mb-0 md:mr-2 text-[14px]">
            Tools
          </button>
          <button className=" text-[14px] rounded hover:border border-blue-500 w-24 h-8 mb-2 md:mb-0 md:mr-2">
            AWS Builder
          </button>
          <button className="text-[14px] rounded hover:border border-blue-500 w-24 h-8 mb-2 md:mb-0 md:mr-2">
            Start Build
          </button>
          <button className="text-[14px] rounded hover:border border-blue-500 w-24 h-8 mb-2 md:mb-0 md:mr-2">
            Build Supplies
          </button>
          <button className="text-[14px] rounded hover:border border-blue-500 w-24 h-8 mb-2 md:mb-0 md:mr-2">
            Tooling
          </button>
          <button className="text-[14px] rounded hover:border border-blue-500 w-24 h-8 mb-2 md:mb-0 md:mr-2">
            BlueHosting
          </button>
        </div>
      </div>

      <div className="w-3/4 ">
        <div className="flex  w-auto h-10 items-center text-sm gap-1.5">
          <span className="text-[13px]">Home</span>
          <MdKeyboardArrowRight
            size="20px"
            className="flex items-center justify-center"
          />
          <span className="text-[13px]">Hosting for all</span>
          <MdKeyboardArrowRight size="20px" />
          <span className="text-[13px]">Hosting</span>
          <MdKeyboardArrowRight size="20px" />
          <span className="text-[13px]">Hosting6</span>
          <MdKeyboardArrowRight size="20px" />
          <span className="text-[13px]">Hosting5</span>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
