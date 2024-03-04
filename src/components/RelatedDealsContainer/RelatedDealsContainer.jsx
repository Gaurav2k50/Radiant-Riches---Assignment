import React from "react";
import RelatedDeal from "../RelatedDealsContainer/RelatedDeal/RelatedDeal";

const RelatedDealsContainer = () => {
  return (
    <div className="w-full items-center justify-center">
      <div className="w-3/4 h-[451px] flex flex-start items-start justify-between">
        <div className="p-4">
          <RelatedDeal />
        </div>
        <div className="p-4">
          <RelatedDeal />
        </div>
        <div className="p-4">
          <RelatedDeal />
        </div>
      </div>
    </div>
  );
};

export default RelatedDealsContainer;
