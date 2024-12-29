
export default function Grow() { 
    return (
      <div className="w-full h-[636px] bg-[#2a7bc6] relative overflow-hidden mx-auto">
      
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
          <div
            className="bg-cover bg-no-repeat absolute top-0 right-0 w-[590px] h-[636px] sm:w-[500px] md:w-[590px] lg:w-[700px]"
            style={{
              backgroundImage: "url('/images/col-md-8.png')",
            }}
          />
        </div>
  
     
        <div className="flex flex-col items-start pt-[112px] pb-[112px] absolute top-0 left-1/2 transform -translate-x-1/2 z-[2] w-full max-w-screen-xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
      
            <div className="flex flex-col gap-[24px] items-start w-full md:w-[438px]">
              <span className="text-[16px] font-bold leading-[24px] text-[#fff] tracking-[0.1px]">
                WORK WITH US
              </span>
              <span className="text-[32px] md:text-[40px] font-bold leading-[50px] text-[#fff] tracking-[0.2px]">
                Now Let’s grow Yours
              </span>
              <span className="w-full md:w-[440px] text-[14px] leading-[20px] text-[#fff]">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
              </span>
              <button className="flex w-[132px] px-[40px] py-[15px] items-center rounded-[5px] border border-[#f9f9f9] text-[#f9f9f9] font-bold transition duration-300 ease-in-out transform hover:bg-[#f9f9f9] hover:text-[#2a7bc6] focus:outline-none focus:ring-2 focus:ring-[#f9f9f9] focus:ring-opacity-50 active:bg-[#f9f9f9] active:text-[#2a7bc6]">
                <span className="text-[14px]">
                
                </span>
              </button>
            </div>
  
        
            <div className="w-full md:w-[548px] h-[412px] bg-transparent relative z-10" />
          </div>
        </div>
      </div>
    );
  }