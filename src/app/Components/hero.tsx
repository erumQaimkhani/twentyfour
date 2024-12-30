

import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white">
  
      <div className="relative h-[500px] md:h-[716px]">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />

        <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
      
          <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
            <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
              Summer 2020
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              New Collection
            </h1>
            <p className="max-w-md text-sm leading-6 text-gray-100 md:text-base">
              We know how large objects will act, <br /> but things on a small scale.
            </p>
            <button className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300">
              Shop Now
            </button>
          </div>

          
        
        </div>
      </div>
    </div>
  );
}
