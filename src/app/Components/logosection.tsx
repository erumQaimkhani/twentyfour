
import React from 'react';
import Image from 'next/image';

const LogosSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 py-8">
      <div className="transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/hooli.png"
          alt="Hooli Logo"
          className="w-[103px] h-[34px] md:w-[120px] md:h-[40px] lg:w-[140px] lg:h-[50px]"
          width={103}
          height={34}
        />
      </div>
      <div className="transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/lya.png"
          alt="Lya Logo"
          className="w-[83px] h-[59px] md:w-[100px] md:h-[70px] lg:w-[120px] lg:h-[80px]"
          width={83}
          height={59}
        />
      </div>
      <div className="transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/leaf.png"
          alt="Leaf Logo"
          className="w-[102px] h-[75px] md:w-[120px] md:h-[80px] lg:w-[140px] lg:h-[90px]"
          width={102}
          height={75}
        />
      </div>
      <div className="transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/strip.png"
          alt="Strip Logo"
          className="w-[103px] h-[42px] md:w-[120px] md:h-[50px] lg:w-[140px] lg:h-[55px]"
          width={103}
          height={42}
        />
      </div>
      <div className="transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/lya.png"
          alt="Lya Logo"
          className="w-[140px] h-[62px] md:w-[160px] md:h-[70px] lg:w-[180px] lg:h-[75px]"
          width={140}
          height={62}
        />
      </div>
      <div className="transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/joker.png"
          alt="Joker Logo"
          className="w-[105px] h-[72px] md:w-[120px] md:h-[80px] lg:w-[140px] lg:h-[90px]"
          width={105}
          height={72}
        />
      </div>
    </div>
  );
};

export default LogosSection;
