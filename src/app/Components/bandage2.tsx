
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Bandage2() {
    const [activeLink, setActiveLink] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetActive = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className="main-container w-full bg-[#fff] relative overflow-hidden mx-auto">
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[3]">
                <div className="w-full h-[91px] relative mx-auto z-[4]">
                    <div className="flex justify-between items-center w-full h-[91px] px-4 md:px-8 lg:px-16">
                        {/* Left Side: Brand */}
                        <div className="flex items-center">
                            <span className="font-['Montserrat'] text-[24px] font-bold text-[#252b42]">
                                Bandage
                            </span>
                        </div>

                        {/* Hamburger Menu (Mobile Only) */}
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

                        {/* Center: Navigation */}
                        <div className={`md:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block`}>
                            {["Home", "Product", "Pricing", "Contact"].map((link) => (
                                <Link
                                    key={link}
                                    href={`/${link.toLowerCase()}`}
                                    onClick={() => handleSetActive(link)}
                                    className={`text-[14px] font-bold ${
                                        activeLink === link ? "text-[#23a6f0]" : "text-[#727272]"
                                    } block py-2 md:py-0`}
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side: Login and CTA */}
                        <div className={`md:flex items-center space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block`}>
                            <Link href="/login" className="text-[14px] font-bold text-[#23a6f0] block py-2 md:py-0">
                                Login
                            </Link>
                            <Button className="bg-[#23a6f0] text-white font-bold px-4 py-2 rounded">
                                Become a member
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
