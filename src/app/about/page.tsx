
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Trying from "../Components/trying";
import BigCompany from "../Components/bigcompany";
import OurTeam from "../Components/ourteam";

export default function About() {
  return (
    <div className="main-container w-[1440px] h-[729px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      {/* Navigation Bar */}
      <div className="w-[1322px] h-[91px] relative overflow-hidden z-[4] mt-0 mr-0 mb-0 ml-[59px]">
        <div className="w-[1322px] h-[91px] absolute top-0 left-1/2 translate-x-[-50%] overflow-hidden z-[5]">
          <div className="w-[815px] h-[58px] absolute top-[16px] left-1/2 translate-x-[-36.44%] z-[8]">
            <div className="flex w-[300px] h-[52px] gap-[45px] items-center absolute top-1/2 right-0 translate-y-[-50%] z-[22]">
              {/* Login Button */}
              <div className="w-[41px] h-[22px] relative z-[23]">
                <span className="flex w-[41px] h-[22px] justify-end items-start font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#23a6f0] tracking-[0.2px]">
                  Login
                </span>
              </div>
              {/* Become a Member Button */}
              <Button className="w-[214px] h-[52px] border-none relative z-[26]">
                <div className="flex w-full h-full items-center bg-[#23a6f0] rounded-[2px]">
                  <span className="h-[22px] font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px]">
                    Become a member
                  </span>
                  <div className="w-[12px] h-[10px] relative">
                    <FaArrowAltCircleRight
                      className="w-[12px] h-[10px] text-[#fff] absolute top-1/2 right-0 translate-y-[-50%]"
                    />
                  </div>
                </div>
              </Button>
            </div>
            {/* Navigation Links */}
            <div className="flex w-[275px] h-[24px] gap-[21px] items-center absolute top-1/2 left-0 translate-y-[-50%]">
              {["Home", "Product", "Pricing", "Contact", "About"].map((item) => (
                <div key={item} className="w-auto h-[24px]">
                  <Link href={`/${item.toLowerCase()}`}>
                    <span className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px]">
                      {item}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Logo */}
          <div className="w-[187px] h-[58px] absolute top-1/2 left-1/2 translate-x-[-280.75%] translate-y-[-49.14%]">
            <span className="font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42]">
              Bandage
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-[1179px] h-[625px] relative z-30 mt-[13px] ml-[195px]">
        <div className="flex w-[1050px] h-[545px] pt-[112px] flex-col gap-[80px] items-start absolute top-0 left-1/2 translate-x-[-56.14%] z-30">
          <div className="flex w-[1044px] gap-[30px] items-center">
            {/* About Us Text */}
            <div className="flex w-[599px] flex-col gap-[35px]">
              <span className="font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42]">
                ABOUT COMPANY
              </span>
              <span className="font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42]">
                ABOUT US
              </span>
              <span className="font-['Montserrat'] text-[20px] text-[#727272] leading-[30px]">
                We know how large objects will act, <br />
                but things on a small scale
              </span>
              {/* Get Quote Button */}
              <Button className="flex w-[195px] items-center bg-[#23a6f0] rounded-[5px] text-white font-bold text-[14px]">
                Get Quote Now
              </Button>
            </div>

            {/* About Us Image */}
            <div className="w-[415px] h-[280px] relative">
              <Image
                src="/images/girlyellow.png"
                alt="About Us"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add the imported components here */}
      <div className="w-full mt-[60px]">
        <Trying />
        <OurTeam />
        <BigCompany />
      </div>
    </div>
  );
}
