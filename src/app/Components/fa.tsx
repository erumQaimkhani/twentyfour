
export default function Fa() {
  return (
    <div className="main-container w-full max-w-[1440px] min-h-screen bg-white relative overflow-hidden mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-12 relative max-w-[1056px] mx-auto">
     
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-montserrat text-[28px] md:text-[40px] font-bold leading-tight text-[#252b42] tracking-wide">
            Pricing FAQs
          </h1>
          <p className="text-[16px] md:text-[20px] text-[#727272] leading-[24px] md:leading-7">
            Problems trying to resolve the conflict between <br className="hidden md:block" />
            the two major realms of Classical physics
          </p>
        </div>

     
        <div className="flex flex-col gap-8 w-full">
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {Array.from({ length: 2 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="p-6 flex flex-col items-start rounded-lg bg-white shadow-md"
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-[9px] h-[16px] bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url('/assets/images/${
                          colIndex === 0 ? 'icon-left.png' : 'icon-right.png'
                        }')`,
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-montserrat text-[16px] font-bold text-[#252b42]">
                        The quick fox jumps over the lazy dog
                      </h3>
                      <p className="text-[14px] text-[#727272] leading-[20px]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

    
        <p className="text-[16px] md:text-[20px] text-[#727272] text-center">
          Haven’t got your answer? Contact our support
        </p>
      </div>
    </div>
  );
}
