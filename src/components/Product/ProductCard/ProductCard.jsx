import React from "react";
import Product from "../Product";

const ProductCard = () => {
  const PRODUCT_RATING = 5;

  const products = [
    {
      mainHeader: "WixPro 72-Inch Responsive Website Builder -",
      aboutContent:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      imageUrl: "main",
      ratingNumbers: "9.8",
      ratingCompliments: "Exceptional",
      rating: PRODUCT_RATING,
    },
    {
      mainHeader: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      aboutContent:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      mainHighlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      imageUrl: "main",
      ratingNumbers: "9.5",
      ratingCompliments: "Excellent",
      rating: PRODUCT_RATING,
    },
    {
      mainHeader: "WixPro 72-Inch Responsive Website Builder -",
      aboutContent:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      imageUrl: "main",
      ratingNumbers: "9.3",
      ratingCompliments: "Exceptional",
      rating: PRODUCT_RATING,
    },
    {
      mainHeader: "CDK Resposive Builder:",
      aboutContent: (
        <>
          <span className="mb-2">
            An extensive library of widgets and apps, and detailed step-by-step
            guides
          </span>
          <br />
          <span className="w-[61px] h-[26px] bg-[#F2F4F7] rounded text-[#074786] text-[13px]">
            26% Off
          </span>
        </>
      ),
      mainHighlights: (
        <div className="">
          <div className="w-505 h-35 flex flex-col rounded bg-[#FFF4ED]">
            <div className="flex items-center m-2">
              <span className="w-[40px] h-[28px] text-[16px] font-bold text-[#1B88F4] flex items-center justify-center rounded bg-white ">
                9.9
              </span>
              <span className="text-[#4B5665] ml-1 text-[15px]">
                Building Responsive
              </span>
            </div>
            <div className="flex items-center m-2">
              <span className="  w-[40px] h-[28px] text-[16px] font-bold text-[#1B88F4] flex items-center justify-center rounded bg-white">
                8.9
              </span>
              <span className="text-[#4B5665] ml-1 text-[15px]">Cool</span>
            </div>
            <div className="flex items-center m-2">
              <span className="w-[40px] h-[28px] text-[16px] font-bold text-[#1B88F4] flex items-center justify-center rounded bg-white">
                8.9
              </span>
              <span className="text-[#4B5665] ml-1 text-[15px]">Docs</span>
            </div>
          </div>
          <div className="mt-2">
            <span className=" text-[#2C384A] text-[16px] ">Why we love it</span>
            <div className="mt-1">
              <span className="flex">
                <input type="checkbox" />
                <span className="ml-1 text-[15px]">Documentation</span>
              </span>
              <span className="flex">
                <input type="checkbox" />
                <span className="ml-1 text-[15px]">Easy Use</span>
              </span>
              <span className="flex">
                <input type="checkbox" />
                <span className="ml-1 text-[15px]">Out Of Box</span>
              </span>
            </div>
          </div>
        </div>
      ),
      imageUrl: "main",
      ratingNumbers: "9.1",
      ratingCompliments: "Very Good",
      rating: PRODUCT_RATING,
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Product
          key={index}
          mainHeader={product.mainHeader}
          aboutContent={product.aboutContent}
          mainHighlights={product.mainHighlights}
          imageUrl={product.imageUrl}
          ratingNumbers={product.ratingNumbers}
          ratingCompliments={product.ratingCompliments}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductCard;
