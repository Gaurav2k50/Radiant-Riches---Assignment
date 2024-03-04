import React, { useState } from "react";
import mainImage from "../../Assets/main.png";
import { FaAngleDown } from "react-icons/fa";
import Rating from "../Product/Rating/Rating";

const Product = ({
  mainHeader,
  aboutContent,
  mainHighlights,
  imageUrl,
  ratingNumbers,
  ratingCompliments,
  rating,
}) => {
  const truncatedHighlights = mainHighlights;

  return (
    <div className="w-full h-255px flex flex-col items-center mt-5">
      <div className="w-3/4 h-255px rounded-lg border-2 border-transparent hover:border-blue-500 p-6 mb-4 flex items-center">
        {/* Product Image */}
        {imageUrl && (
          <img
            src={mainImage}
            alt=""
            className="ml-4 mt-8"
            style={{ width: 115, height: 80 }}
          />
        )}

        <div className="ml-6 flex flex-col">
          {/* Product Header */}
          <p className="text-sm">
            <span className="font-semibold text-[16px]">{mainHeader}</span>
            <span className="text-[#4B5665] text-[16px]">{aboutContent}</span>
          </p>

          {/* Main Highlights */}
          <div className="text-sm mt-1">
            <span className="font-bold text-[16px]">Main highlights</span>
            <div className="text-[#4B5665] ml-5 mt-2 text-[16px]">
              {truncatedHighlights}
            </div>
          </div>

          <div className="flex mt-1">
            <button className="text-black-500 text-[16px] text-sm hover:underline focus:outline-none text-[#1B88F4]">
              Show More
            </button>
            <span className="ml-1 mt-1 cursor-pointer text-blue-400">
              <FaAngleDown />
            </span>
          </div>
        </div>

        <div className="ml-10 flex flex-col items-center">
          {/* Rating Section */}
          <div className="w-[135px] bg-[#F3F9FF] h-[118px] flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-[32px]">
              {ratingNumbers}
            </div>
            <span className="text-[14px]"> {ratingCompliments}</span>
            <span className="w-[66px] h-[11px] flex items-center justify-center mt-2 ">
              <Rating rating={rating} />
            </span>
          </div>

          {/* View Button */}
          <div className=" mt-8 rounded bg-[#1B88F4] flex items-center justify-center">
            <button className="text-white w-[232px] h-[48px] ">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
