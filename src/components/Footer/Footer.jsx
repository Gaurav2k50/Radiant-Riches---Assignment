import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white w-full h-auto md:h-80 flex items-center md:flex-col">
      <div className="w-full h-auto flex flex-col md:flex-row justify-evenly items-start mb-10 mt-10">
        {/* Categories Section */}
        <div className="space-y-2 w-[102] h-[24px] text-[#FFFFFF]">
          <div className="text-lg font-bold text-[16px]">Categories</div>
          <div className="text-base text-[#B6BDC4] text-[13px]">
            Web Builder
          </div>
          <div className="text-base text-[#B6BDC4] text-[13px]">Hosting</div>
          <div className="text-base text-[#B6BDC4] text-[13px]">
            Data Center
          </div>
          <div className="text-base text-[#B6BDC4] text-[13px]">
            Robotic Automation
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-2 w-[102] h-[24px] text-[#FFFFFF]">
          <div className="text-lg font-bold text-[16px]">Contact</div>
          <div className="text-base text-[#B6BDC4] text-[13px]">Contact</div>
          <div className="text-base text-[#B6BDC4] text-[13px]">
            Privacy Policy
          </div>
          <div className="text-base text-[#B6BDC4] text-[13px]">
            Terms Of Service
          </div>
          <div className="text-base text-[#B6BDC4] text-[13px]">About</div>
        </div>

        {/* Location Section */}
        <div className="space-y-2 w-[102] h-[24px] text-[#FFFFFF] flex items-center md:mt-0">
          <div className="mt-8 font-bold text-[16px]">United States</div>
          <div className="text-base ">
            <RiArrowDropDownLine size="25" className="mt-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
