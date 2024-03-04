import React from "react";

const RelatedFooter = () => {
  return (
    <div className="w-full flex items-center justify-center mt-10 mb-2">
      <div className="w-full md:w-3/4 h-auto md:h-[171px] flex flex-col md:flex-row items-center justify-between p-2 mb border hover:border-blue-500">
        <div className="w-full md:w-[398px] h-auto md:h-[88px] text-[32px] text-[#5C6874] font-normal mb-4 md:mb-0 md:mr-2">
          Sign up and get exclusive <br />
          special deals
        </div>
        <div className="w-full md:w-auto flex items-center">
          <input
            type="text"
            className="w-full md:w-[348px] h-[52px] text-[black] rounded-tl-lg rounded-bl-lg"
          />
          <button className="w-full md:w-[97px] h-[52px] bg-[#1B88F4] text-[white] rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg mt-2 md:mt-0 md:ml-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedFooter;
