import React from "react";
import Link from "next/link";

const PriceHeader: React.FC = () => {
  return (
    <div className="main-container w-[1440px] h-[384px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div className="h-[352px] absolute top-0 left-0 right-0 overflow-hidden">
        <div className="w-[1322px] h-[91px] relative overflow-hidden z-[2] mx-[59px]">
          <div className="w-[1322px] h-[91px] absolute top-0 left-1/2 translate-x-[-50%] overflow-hidden z-[3]">
            <div className="w-[815px] h-[58px] absolute top-[16px] left-1/2 translate-x-[-36.44%] overflow-hidden z-[6]">
           
              <div className="flex w-[300px] h-[52px] gap-[45px] items-center absolute top-1/2 right-0 translate-y-[-50%] z-[20]">
           
                <Link
                  href="/login"
                  className="flex w-[41px] h-[22px] justify-end items-start font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#23a6f0] tracking-[0.2px] text-right"
                >
                  Login
                </Link>

          
                <Link
                
                  href="/membership"
                  className="flex w-[214px] h-[52px] items-center gap-[15px] bg-[#23a6f0] rounded-[5px] text-white text-[14px] font-bold font-['Montserrat'] leading-[22px] tracking-[0.2px] justify-center"
                >
                  Become a member
                </Link>
                
              </div>

          
              <div className="flex w-[275px] h-[24px] gap-[21px] items-center absolute top-1/2 left-0 translate-y-[-50%] z-[7]">
                {[
                  { label: "Home", href: "/" },
                  { label: "Product", href: "/product" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

     
            <div className="w-[187px] h-[58px] absolute top-1/2 left-1/2 translate-x-[-280.75%] translate-y-[-49.14%] z-[4]">
              <Link
                href="/"
                className="font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px]"
              >
                Bandage
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.5)] absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[1]" />
      </div>
     
      <div className="flex w-[870px] h-[280px] flex-col items-center absolute top-[104px] left-1/2 translate-x-[-50%] z-[28]">
        <div className="flex w-[427px] flex-col gap-[16px] items-center z-[30]">
          <span className="w-[71px] h-[24px] font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] text-center z-[31]">
            PRICING
          </span>
          <span className="w-[427px] h-[80px] font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] text-center z-[32]">
            Simple Pricing
          </span>
          <div className="flex w-[134px] gap-[15px] items-center z-[33]">
            <Link
              href="/"
              className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px]"
            >
              Home
            </Link>
            
            <Link
              href="/pricing"
              className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px]"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceHeader;
