
import React from "react";
import Image from "next/image";

export default function Neural() {
  return (
    <div className="main-container w-full max-w-[1440px] h-auto bg-[#fff] relative overflow-hidden mx-auto my-0 px-4">
      <div className="flex flex-wrap justify-center items-center gap-[30px] relative mt-0 mb-0">
      
        <div className="w-full md:w-[704px] h-auto md:h-[682px] relative z-[1]">
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[2]">
            <div className="w-full md:w-[632px] h-auto md:h-[491.994px] relative z-[3] mt-[50px] md:mt-[117px] mx-auto">
              <div className="w-[100%] md:w-[725px] h-auto md:h-[774px] relative z-[4] mx-auto">
              
                <Image
                  src="/images/neural.png" 
                  alt="Product Image"
                  width={725} 
                  height={774} 
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-[573px] flex flex-col gap-[20px] justify-center items-start md:items-start shrink-0 z-[5] text-center md:text-left">
          <span className="text-[#bdbdbd] text-[16px] font-bold tracking-[0.1px] md:text-[18px]">
            SUMMER 2020
          </span>
          <span className="text-[#252b42] text-[30px] md:text-[40px] font-bold leading-tight tracking-[0.2px]">
            Part of the Neural <br />
            Universe
          </span>
          <span className="text-[#727272] text-[18px] md:text-[20px] leading-[28px] tracking-[0.2px]">
            We know how large objects will act, <br />
            but things on a small scale.
          </span>

          
          <div className="flex gap-[10px] justify-center md:justify-start">
           
            <button className="flex w-[160px] md:w-[173px] py-3 px-6 bg-[#2cc070] rounded-[5px] text-[#fff] font-bold text-[14px] hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              BUY NOW
            </button>

        
            <button className="flex w-[160px] md:w-[173px] py-3 px-6 border border-[#2cc070] rounded-[5px] text-[#2cc070] font-bold text-[14px] hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
