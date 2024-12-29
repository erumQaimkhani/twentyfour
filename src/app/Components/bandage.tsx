
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Bandage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Bottom Section
    <div>
      <div className="py-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252b42]">Bandage</div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#252b42] focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
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
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-4">
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
          </div>
        )}
      </div>
    </div>
  );
}
