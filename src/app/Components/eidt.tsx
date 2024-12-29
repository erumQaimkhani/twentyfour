
import Image from "next/image";

export default function Eidt() {
  return (
    <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white flex justify-center items-center">
      <div className="flex flex-col w-full max-w-[1050px] py-[80px] gap-[48px] items-center relative">
        {/* Header Section */}
        <div className="flex w-full max-w-[607px] flex-col items-center text-center z-10">
          <span className="h-[32px] font-['Montserrat'] text-[24px] font-bold text-[#252b42] tracking-[0.1px]">
            EDITOR’S PICK
          </span>
          <span className="text-[14px] text-[#727272]">
            Problems trying to resolve the conflict between
          </span>
        </div>

        {/* Main Flex Container */}
        <div className="flex w-full gap-[30px] justify-center items-start z-10">
          {/* First Image Section */}
          <div className="w-full max-w-[510px] h-[500px] relative">
            <div className="w-full h-full bg-[#fff] absolute top-0 left-0 flex flex-col justify-end z-20">
              <button className="w-[170px] h-[48px] bg-[#fff] border-none mx-[31px] mb-[20px]">
                <span className="font-['Montserrat'] text-[16px] font-bold text-[#252b42]">
                  MEN
                </span>
              </button>
              <Image
                src="/images/col-md-2.png"
                alt="Men's Collection"
                layout="fill"
                objectFit="cover"
                className="z-10"
              />
            </div>
          </div>

          {/* Second Image Section */}
          <div className="w-full max-w-[240px] h-[500px] relative">
            <div className="w-full h-full bg-[#fff] absolute top-0 left-0 flex flex-col justify-end z-20">
              <button className="w-[136px] mx-auto mb-[20px] bg-[#fff] border-none">
                <span className="text-[16px] font-bold text-[#252b42]">WOMEN</span>
              </button>
              <Image
                src="/images/card-item.png"
                alt="Women's Collection"
                layout="fill"
                objectFit="cover"
                className="z-10"
              />
            </div>
          </div>

          {/* Accessories and Kids Sections */}
          <div className="flex flex-col gap-[16px] items-center w-[240px] h-[500px]">
            {/* Accessories */}
            <div className="w-[240px] h-[242px] relative">
              <div className="w-full h-full bg-[#fff] absolute top-0 left-0 flex flex-col justify-end z-20">
                <button className="w-[170px] mx-auto mb-[20px] bg-[#fff] border-none">
                  <span className="text-[16px] font-bold text-[#252b42]">ACCESSORIES</span>
                </button>
                <Image
                  src="/images/acceroies.png"
                  alt="Accessories"
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                />
              </div>
            </div>

            {/* Kids */}
            <div className="w-[240px] h-[242px] relative">
              <div className="w-full h-full bg-[#fff] absolute top-0 left-0 flex flex-col justify-end z-20">
                <button className="w-[120px] mx-auto mb-[20px] bg-[#fff] border-none">
                  <span className="text-[16px] font-bold text-[#252b42]">KIDS</span>
                </button>
                <Image
                  src="/images/kid.png"
                  alt="Kids"
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
