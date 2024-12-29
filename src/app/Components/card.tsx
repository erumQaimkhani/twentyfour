
import React from "react";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";

const Card = () => {
  return (
    <div className="main-container w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="block text-sm font-bold text-[#252b42] uppercase tracking-wide">
            Visit Our Office
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#252b42] mt-2">
            We help small businesses <br className="hidden md:block" />
            with big ideas
          </h1>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <FaPhone className="text-[#252b42] text-3xl" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#252b42]">
                georgia.young@example.com
              </p>
              <p className="text-sm font-semibold text-[#252b42]">
                georgia.young@ple.com
              </p>
            </div>
            <span className="mt-4 text-lg font-bold text-[#252b42]">
              Get Support
            </span>
            <Button className="mt-6 px-8 py-2 rounded-full border border-[#23a6f0] text-[#23a6f0] hover:bg-[#23a6f0] hover:text-white">
              Submit Request
            </Button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#252b42] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <FaMapPin className="text-white text-3xl" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-white">
                georgia.young@example.com
              </p>
              <p className="text-sm font-semibold text-white">
                georgia.young@ple.com
              </p>
            </div>
            <span className="mt-4 text-lg font-bold text-white">
              Visit Us
            </span>
            <Button className="mt-6 px-8 py-2 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-[#252b42]">
              Get Directions
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-[#252b42] text-3xl" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#252b42]">
                georgia.young@example.com
              </p>
              <p className="text-sm font-semibold text-[#252b42]">
                georgia.young@ple.com
              </p>
            </div>
            <span className="mt-4 text-lg font-bold text-[#252b42]">
              Email Us
            </span>
            <Button className="mt-6 px-8 py-2 rounded-full border border-[#23a6f0] text-[#23a6f0] hover:bg-[#23a6f0] hover:text-white">
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
