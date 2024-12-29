
import Link from "next/link";
import React from "react";
import Ourteam from "./ourteam"; 
import Image from "next/image";

const Innovation: React.FC = () => {
  return (
    <section className="bg-white relative w-full">
    
      <div className="absolute inset-0 bg-white/50 z-10" />

   
      <div className="container mx-auto px-6 py-8 relative z-20">
       
        <div className="text-center">
          <span className="block text-sm font-bold text-[#727272] tracking-wide">
            WHAT WE DO
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#252b42] leading-tight">
            Innovation tailored for you
          </h1>
        </div>

     
        <div className="flex justify-center items-center mt-6 space-x-2 text-sm font-semibold text-[#727272]">
          <Link href="#home" className="text-[#252b42] hover:underline">
            Home
          </Link>
          <span>/</span>
          <span>Team</span>
        </div>
      </div>

  
      <div className="w-full h-auto relative overflow-hidden mx-auto flex justify-center items-center bg-gray-50 py-8">
        <div className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
    
          {[ 
            { img: "/images/red.png", alt: "Red" },
            { img: "/images/coat.png", alt: "Coat" },
            { img: "/images/blue.png", alt: "Blue" },
            { img: "/images/whiteblack.png", alt: "White & Black" },
            { img: "/images/golden.png", alt: "Golden" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full h-64 sm:h-72 lg:h-80 bg-gray-100 relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={item.img}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <Ourteam/>
    </section>
  );
};

export default Innovation;
