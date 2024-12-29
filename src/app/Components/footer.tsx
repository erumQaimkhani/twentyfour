
"use client";
import React, { useState } from "react";
import BlueIcon from "./blueicon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className="w-full bg-white py-12 px-6 sm:px-12 lg:px-24">
      {/* Social Media and Brand */}
      <div className="flex flex-wrap justify-between items-center mb-10">
        {/* Brand Name */}
        <h1 className="text-black text-2xl font-bold">Bandage</h1>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 sm:mt-0">
          <BlueIcon />
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#252b42]">Company Info</h2>
          <ul className="space-y-2">
            <li className="text-sm text-[#727272]">About Us</li>
            <li className="text-sm text-[#727272]">Careers</li>
            <li className="text-sm text-[#727272]">We are hiring</li>
            <li className="text-sm text-[#727272]">Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#252b42]">Legal</h2>
          <ul className="space-y-2">
            <li className="text-sm text-[#727272]">Privacy Policy</li>
            <li className="text-sm text-[#727272]">Terms of Service</li>
            <li className="text-sm text-[#727272]">Cookies</li>
            <li className="text-sm text-[#727272]">Licensing</li>
          </ul>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#252b42]">Features</h2>
          <ul className="space-y-2">
            <li className="text-sm text-[#727272]">Business Marketing</li>
            <li className="text-sm text-[#727272]">User Analytics</li>
            <li className="text-sm text-[#727272]">Live Chat</li>
            <li className="text-sm text-[#727272]">Unlimited Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#252b42]">Resources</h2>
          <ul className="space-y-2">
            <li className="text-sm text-[#727272]">iOS & Android</li>
            <li className="text-sm text-[#727272]">Watch a Demo</li>
            <li className="text-sm text-[#727272]">Customers</li>
            <li className="text-sm text-[#727272]">API</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#252b42]">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex items-center bg-[#f8f8f8] rounded-md">
              <Input
                type="email"
                className="w-full sm:w-3/4 p-2 text-sm rounded-l-md border border-[#e6e6e6] focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                aria-label="Enter your email"
                required
              />
              <Button
                type="submit"
                className="bg-[#23a6f0] text-white py-2 px-4 rounded-r-md mt-2 sm:mt-0"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </Button>
            </div>
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </form>
          <p className="text-xs text-[#727272] mt-2 sm:mt-0">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}
