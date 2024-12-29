
"use client";
import Social2 from './socialicon2';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Free() {
  // State for handling button click feedback
  const [isTrialStarted, setIsTrialStarted] = useState(false);

  // Handle the click on "Try it free now" button
  const handleTrialStart = () => {
    setIsTrialStarted(true);
    alert("Your 14-day free trial has started!");
  };

  return (
    <div className="main-container w-full max-w-screen-xl h-[582px] bg-[#fff] relative overflow-hidden mx-auto">
      <div className="flex flex-col items-center gap-[96px] w-full pt-[160px] pb-[160px] px-6 sm:px-12 md:px-24 lg:px-0">
        <div className="flex flex-col gap-[36px] items-center">
          <div className="flex flex-col gap-[30px] items-center">
            <span className="text-center text-[40px] font-bold text-[#252b42] leading-[50px] tracking-[0.2px]">
              Start your 14 days free trial
            </span>
            <span className="text-center text-[14px] text-[#727272] leading-[20px] tracking-[0.2px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br />
              do met sent. RELIT official consequent.
            </span>
            
            {/* Button for starting trial */}
            <Button 
              className="w-[186px] h-[52px] bg-[#23a6f0] text-white font-bold text-[14px] rounded-[5px] flex items-center justify-center gap-[10px] mt-[20px]"
              onClick={handleTrialStart}
            >
              <span className="text-center">Try it free now</span>
            </Button>

            {/* Display trial status */}
            {isTrialStarted && (
              <p className="mt-4 text-green-500 text-[16px]">Your 14-day trial has started! Enjoy!</p>
            )}

            {/* Social Media Links */}
            <Social2 />
          </div>
        </div>
      </div>
    </div>
  );
}
