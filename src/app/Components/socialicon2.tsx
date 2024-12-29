
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { href: "#", label: "Facebook", icon: <FaFacebook /> },
    { href: "#", label: "Twitter", icon: <FaTwitter /> },
    { href: "#", label: "Instagram", icon: <FaInstagram /> },
    { href: "#", label: "LinkedIn", icon: <FaLinkedin /> },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          aria-label={link.label}
          className="text-[#23A6F0] hover:text-[#99c4dd] text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#99c4dd]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
