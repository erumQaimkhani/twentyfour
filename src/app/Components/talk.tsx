
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Talk: React.FC = () => {

  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handleButtonClick = () => {
    alert("Button clicked! Implement your functionality here.");
  };

  return (
    <div className="main-container w-full max-w-[1440px] h-auto sm:h-[348px] bg-[#fff] relative overflow-hidden mx-auto my-0 px-4 sm:px-8 lg:px-16">
     
      <FaArrowCircleDown
        onClick={handleScroll}
        className="w-[24px] h-[24px] text-[#23a6f0] cursor-pointer absolute top-[20px] left-1/2 transform -translate-x-1/2 z-[10] sm:w-[30px] sm:h-[30px] hover:scale-110 transition duration-300"
        aria-label="Scroll Down"
      />

   
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16 lg:gap-24 py-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:w-[607px]">
          <span className="font-montserrat text-center text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px]">
            WE CAN&apos;T WAIT TO MEET YOU
          </span>
          <h1 className="font-montserrat text-center text-[32px] sm:text-[48px] lg:text-[58px] font-bold leading-[40px] sm:leading-[60px] lg:leading-[80px] text-[#252b42] tracking-[0.2px]">
            Let’s Talk
          </h1>
          <Button
            onClick={handleButtonClick}
            className="flex justify-center items-center w-[186px] sm:w-[200px] gap-[10px] bg-[#23a6f0] text-white py-[15px] px-[40px] rounded-[5px] transition duration-300 hover:bg-[#1d94c8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23a6f0]"
          >
            <span className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px]">
              Try it free now
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Talk;
