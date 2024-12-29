

"use client"; 

import Image from "next/image";
import Bandage from "../Components/bandage";
import SocialIcons from "../Components/socialicon"; 
import Card from "../Components/card"; 
import Talk from "../Components/talk";
import Footer from "../Components/footer";

const Contact: React.FC = () => {
  return (
    <div className="main-container w-full h-auto bg-white relative overflow-hidden mx-auto py-10">
      <div className="container mx-auto px-6">
        <Bandage />  {/* Bandage component likely handles interaction */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <span className="text-[16px] font-bold text-[#252b42]">
              CONTACT US
            </span>
            <h1 className="text-[36px] md:text-[58px] font-bold leading-tight text-[#252b42]">
              Get in touch <br />
              today!
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#727272] leading-relaxed">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <div>
              <p className="text-[20px] md:text-[24px] font-bold text-[#252b42]">
                Phone: +451 215 215
              </p>
              <p className="text-[20px] md:text-[24px] font-bold text-[#252b42] mt-3">
                Fax: +451 215 215
              </p>
            </div>
     
            <SocialIcons /> 
          </div>

       
          <div className="flex-shrink-0 md:w-1/2 w-full">
            <Image
              src="/images/contact.png" 
              alt="Contact Us"
              width={500}
              height={700}
              className="bg-pink-300 bg-rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Talk />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
