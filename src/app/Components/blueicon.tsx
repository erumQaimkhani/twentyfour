
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function BlueIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <Link
        href="#"
        aria-label="Facebook"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-lg sm:text-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
      >
        <FaFacebook />
      </Link>
      <Link
        href="#"
        aria-label="Twitter"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-lg sm:text-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
      >
        <FaTwitter />
      </Link>
      <Link
        href="#"
        aria-label="Instagram"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-lg sm:text-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
      >
        <FaInstagram />
      </Link>
      <Link
        href="#"
        aria-label="LinkedIn"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-lg sm:text-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
}
