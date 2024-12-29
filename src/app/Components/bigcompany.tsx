
import React from 'react';
import LogosSection from './logosection';
import Grow from './grow';

const BigCompanySection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
    
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 animate-fadeIn">
            Big Companies Are Here
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed animate-fadeIn delay-200">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 animate-slideUp">
          <LogosSection />
          <Grow />
        </div>
      </div>
    </div>
  );
};

export default BigCompanySection;
