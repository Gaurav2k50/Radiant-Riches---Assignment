import React from "react";
import main from "../../../Assets/main.png";

const RelatedDeal = () => {
  return (
    <div className="w-[333px] h-[425px] bg-[#FBFCFD] rounded-xl ml-[30%] border-2 border-transparent hover:border-blue-500">
      <div className="p-4">
        <div className="w-full h-[180px] flex items-center justify-center">
          <img
            src={main}
            alt="Main Image"
            style={{ width: 141, height: 103 }}
          />
        </div>
        <div className="w-full h-[215px]">
          <div className="text-[13px] flex text-[#074786] font-bold">
            <div className="w-[69px] h-[28px] flex items-center justify-center bg-[#F2F4F7] rounded-lg">
              20% Off
            </div>
            <div className="w-[107px] h-[28px] flex items-center justify-center bg-[#F2F4F7] rounded-lg ml-1">
              Limited time
            </div>
          </div>
          <div className="w-full h-[24px] p-4 text-[#626E79] font-bold flex items-center justify-center">
            Webbuilder 1
          </div>
          <div className="w-full h-[48px] text-[#626E79] text-[16px]">
            Computer Modern classic with Wix support
          </div>
          <div className="w-full flex mt-2">
            <div className="w-[71px] h-[28px] text-[20px] font-normal">
              $39.96
            </div>
            <div className="w-[48px] h-[20px] text-[14px] font-normal ml-1 mt-3">
              $49.96
            </div>
            <div className="w-[63px] h-[20px] font-normal text-[13px] text-[#EF4C5D] ml-1 mt-3">
              (20% Off)
            </div>
          </div>
          <div>
            <button className="w-full h-[48px] text-[white] bg-[#1B88F4] text-[16px] rounded-xl mt-4">
              View Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedDeal;
