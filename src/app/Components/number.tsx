
import React from 'react';

export default function Number() {
  return (
    <div className="main-container w-full h-[264px] bg-white relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1050px] pt-[80px] pb-[80px] flex-col gap-[50px] items-center relative mt-0 mx-auto">
        <div className="flex w-full gap-[30px] items-start shrink-0 flex-nowrap relative z-10">
 
          <div className="flex w-[238px] flex-col items-center shrink-0 flex-nowrap relative z-[2]">
            <span className="text-[#252b42] text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center z-[3]">
              15K
            </span>
            <span className="text-[#727272] text-[16px] font-bold leading-[24px] text-center z-[4]">
              Happy Customers
            </span>
          </div>

       
          <div className="flex w-[241px] flex-col items-center shrink-0 flex-nowrap relative z-[5]">
            <span className="text-[#252b42] text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center z-[6]">
              150K
            </span>
            <span className="text-[#727272] text-[16px] font-bold leading-[24px] text-center z-[7]">
              Monthly Visitors
            </span>
          </div>

       
          <div className="flex w-[240px] flex-col items-center shrink-0 flex-nowrap relative z-[8]">
            <span className="text-[#252b42] text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center z-[9]">
              15
            </span>
            <span className="text-[#727272] text-[16px] font-bold leading-[24px] text-center z-[10]">
              Countries Worldwide
            </span>
          </div>

          {/* Top Partners */}
          <div className="flex w-[240px] flex-col items-center shrink-0 flex-nowrap relative z-[11]">
            <span className="text-[#252b42] text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center z-[12]">
              100+
            </span>
            <span className="text-[#727272] text-[16px] font-bold leading-[24px] text-center z-[13]">
              Top Partners
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}