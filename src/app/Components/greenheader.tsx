
"use client";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link";
import { useState } from "react";
import SocialIcons from "./socialicon";

const Greenheader = () => {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-[#23856D] shadow-md">
   
      <div className="bg-[#23856D] text-white text-sm py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
        
          <div className="mt-2 md:mt-0 text-center md:text-left">
            Follow Us and get a chance to win 80% off
          </div>
          <SocialIcons />
        </div>
      </div>

  
      <div className="py-4 bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
      
          <div className="text-2xl font-bold text-[#252b42]">Bandage</div>

       
          <div className="md:hidden flex items-center">
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#23a6f0] w-6 h-6"
              onClick={toggleMobileMenu}
            />
          </div>

     
          <nav className={`md:flex space-x-6 ${isMobileMenuOpen ? 'flex-col mt-4' : 'hidden md:flex'}`}>
            <Link href="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-500">
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-500">
              About
            </Link>
            <Link href="/blog" className="hover:text-gray-500">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </nav>

      
          <div className="flex items-center space-x-4">
         
            <Button className="hidden md:flex items-center px-4 py-2 border border-[#23a6f0] text-[#23a6f0] rounded-full hover:bg-[#23a6f0] hover:text-white transition">
              Login / Register
            </Button>
    
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[#23a6f0] w-5 h-5"
            />
      
            <FontAwesomeIcon icon={faUser} className="text-[#23a6f0] w-5 h-5" />
          </div>
        </div>

   
        {isMobileMenuOpen && (
          <div className="md:hidden flex justify-center mt-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-gray-500">
                Home
              </Link>
              <Link href="/shop" className="hover:text-gray-500">
                Shop
              </Link>
              <Link href="/about" className="hover:text-gray-500">
                About
              </Link>
              <Link href="/blog" className="hover:text-gray-500">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Greenheader;
