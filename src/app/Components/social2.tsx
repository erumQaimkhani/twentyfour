
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Social2() {
  return (
    <div className="flex gap-4 mt-4 justify-center sm:justify-start">
      <Link
        href="#"
        aria-label="Facebook"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0]"
      >
        <FaFacebook />
      </Link>
      <Link
        href="#"
        aria-label="Twitter"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0]"
      >
        <FaTwitter />
      </Link>
      <Link
        href="#"
        aria-label="Instagram"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0]"
      >
        <FaInstagram />
      </Link>
      <Link
        href="#"
        aria-label="LinkedIn"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0]"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
}
