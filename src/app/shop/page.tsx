
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // Added faBars for the hamburger menu
import Link from "next/link";
import LogosSection from "../Components/logosection";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Show from "../Components/show";
import Footer from "../Components/footer";
import ProductCards from "../Components/productcards";
import SocialIcons from "../Components/socialicon"; // Adjusted import for social icons

const Shop = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div>
      {/* Header */}
      <header className="w-full bg-[#23856D] shadow-md">
        {/* Top Section */}
        <div className="bg-[#23856D] text-white text-sm py-2">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            {/* Left Section */}
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
            {/* Middle Section */}
            <div className="mt-2 md:mt-0 text-center md:text-left">
              Follow Us and get a chance to win 80% off
            </div>
            <SocialIcons />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 bg-white">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#252b42]">Bandage</div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#23a6f0] w-6 h-6 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            </div>

            {/* Navigation Links */}
            <nav
              className={`md:flex space-x-6 ${
                isMobileMenuOpen ? "flex flex-col mt-4 md:mt-0" : "hidden md:flex"
              }`}
            >
              <Link href="/" className="hover:text-gray-500">
                Home
              </Link>
              <Link href="/shop" className="hover:text-gray-500">
                Product
              </Link>
              <Link href="/product1" className="hover:text-gray-500">
                Product1
              </Link>
              <Link href="/blog" className="hover:text-gray-500">
                Blog
              </Link>
              <Link href="/team" className="hover:text-gray-500">
                Team
              </Link>
            </nav>

            {/* Icons Section */}
            <div className="flex items-center space-x-4">
              {/* Login/Register */}
              <button className="hidden md:flex items-center px-4 py-2 border border-[#23a6f0] text-[#23a6f0] rounded-full hover:bg-[#23a6f0] hover:text-white transition">
                Login / Register
              </button>
              {/* Cart */}
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#23a6f0] w-5 h-5"
              />
              {/* Profile */}
              <FontAwesomeIcon icon={faUser} className="text-[#23a6f0] w-5 h-5" />
            </div>
          </div>

          {/* Mobile Menu (when open) */}
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

      {/* Main Content */}
      <main>
        <Show />
        <Breadcrumb />
        <LogosSection />
        <ProductCards />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
