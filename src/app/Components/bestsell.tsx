
import React from "react";

export default function BestSell() {
  return (
    <div className="main-container w-full max-w-[692px] mx-auto my-6 px-4">
      <div className="flex flex-col gap-3 items-center text-center">
        {/* Featured Products */}
        <span className="font-['Montserrat'] text-sm md:text-lg text-[#727272] tracking-wide">
          Featured Products
        </span>
        
        {/* BESTSELLER PRODUCTS */}
        <span className="font-['Montserrat'] text-xl md:text-3xl font-bold text-[#252b42] tracking-wide">
          BESTSELLER PRODUCTS
        </span>
        
        {/* Subtitle */}
        <span className="font-['Montserrat'] text-xs md:text-sm text-[#727272] tracking-wide">
          Problems trying to resolve the conflict between
        </span>
      </div>
    </div>
  );
}
