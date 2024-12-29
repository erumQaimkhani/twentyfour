
import Number from "./number";
import OurTeam from "./ourteam";

export default function Trying() {
  return (
    <div className="main-container w-full max-w-[1440px] h-auto bg-[#fff] relative overflow-hidden mx-auto my-0 px-4 sm:px-8 lg:px-16 py-8">
   
      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-center">
      
        <div className="flex flex-col gap-6 lg:gap-8 max-w-lg text-left">
          <span className="text-[14px] font-medium text-[#e64040] tracking-wide">
            Problems trying
          </span>
          <h1 className="text-[24px] sm:text-[32px] font-bold text-[#252b42] leading-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h1>
        </div>

      
        <div className="max-w-lg">
          <p className="text-[14px] font-normal text-[#727272] leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics.
          </p>
        </div>
      </div>

    
      <div className="mt-8">
        <Number />
        <OurTeam />
      </div>
    </div>
  );
}
