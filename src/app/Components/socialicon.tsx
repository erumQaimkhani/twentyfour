
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcon: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
  
      <p className="text-white text-sm sm:text-base">Follow Us:</p>

   
      <div className="flex gap-4">
        <Link href="#" aria-label="Facebook">
          <FaFacebook
            className="text-white text-2xl transition-transform transform hover:scale-110 hover:text-[#99c4dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99c4dd]"
          />
        </Link>
        <Link href="#" aria-label="Twitter">
          <FaTwitter
            className="text-white text-2xl transition-transform transform hover:scale-110 hover:text-[#99c4dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99c4dd]"
          />
        </Link>
        <Link href="#" aria-label="Instagram">
          <FaInstagram
            className="text-white text-2xl transition-transform transform hover:scale-110 hover:text-[#99c4dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99c4dd]"
          />
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <FaLinkedin
            className="text-white text-2xl transition-transform transform hover:scale-110 hover:text-[#99c4dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99c4dd]"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;
