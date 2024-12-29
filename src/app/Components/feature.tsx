import React from 'react';

const Feature: React.FC = () => {
  return (
    <div className="main-container flex w-[692px] flex-col items-center flex-nowrap relative overflow-hidden mx-auto my-0">
      <div className="flex w-[691px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
        <span className="flex w-[114px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[1]">
          Practice Advice
        </span>
        <span className="flex w-[309px] h-[50px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[2]">
          Featured Posts
        </span>
        <span className="flex w-[469px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[3]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </span>
      </div>
    </div>
  );
};

export default Feature;

