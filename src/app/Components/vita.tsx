
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Vita() {
  return (
    <div className="main-container w-full max-w-[1440px] relative overflow-hidden mx-auto my-0 px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative z-[1]">
      
        <div className="flex flex-col gap-6 items-start">
          <span className="text-[14px] sm:text-[16px] font-medium text-white tracking-wide">
            SUMMER 2020
          </span>
          <h1 className="text-[28px] sm:text-[40px] lg:text-[58px] font-bold text-white leading-tight">
            Vita Classic Product
          </h1>
          <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-white leading-relaxed max-w-md">
            We know how large objects will act, we know how our objects will
            act, we know.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[20px] sm:text-[24px] font-bold text-white">
              $16.48
            </span>
            <Button
              aria-label="Add Vita Classic Product to Cart"
              className="px-6 py-3 bg-[#2cc070] rounded-md text-white font-bold transition duration-300 hover:bg-[#23855d]"
            >
              ADD TO CART
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md relative">
          <Image
            src="/images/vita.png"
            alt="Vita Classic Product"
            width={443}
            height={685}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
      </div>

   
      <div className="absolute inset-0 bg-[#23856d] z-0" />
    </div>
  );
}
