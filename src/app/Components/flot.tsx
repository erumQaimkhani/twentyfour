
"use client";
import Image from "next/image";
import { FaCartPlus, FaCircle, FaStar, FaStarHalf, FaHeart, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Flot: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  const handleAvailabilityClick = () => {
    setIsAvailable(!isAvailable);
    alert(isAvailable ? "This item is in stock!" : "This item is out of stock.");
  };

  const handleSelectOptions = () => {
    alert("Redirecting to product options...");
  };

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleFavorite = () => {
    alert("Item added to favorites!");
  };

  const handleViewDetails = () => {
    alert("Viewing product details...");
  };

  return (
    <div className="w-full h-auto bg-white relative overflow-hidden mx-auto py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Image */}
          <div className="flex-shrink-0 md:w-1/2 w-full mb-6 md:mb-0">
            <Image
              src="/images/sofa.png"
              alt="Floating Phone"
              width={500}
              height={700}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <span className="text-[14px] md:text-[16px] font-bold text-[#252b42]">
              CONTACT US
            </span>
            <h1 className="text-[28px] md:text-[40px] lg:text-[58px] font-bold leading-tight text-[#252b42]">
              Floating Phone
            </h1>

            <div className="flex items-center">
              <p className="text-[16px] md:text-[18px] text-[#727272] leading-relaxed">
                10 Reviews
              </p>
              <div className="flex items-center ml-2 gap-1">
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <FaStar className="text-[#FFD700]" />
                <FaStarHalf className="text-[#FFD700]" />
              </div>
            </div>

            <div>
              <p className="text-[20px] md:text-[24px] font-bold text-[#252b42]">
                $1,139.33
              </p>

              {/* Availability Button */}
              <div className="flex items-center gap-4 mt-2">
                <Button
                  onClick={handleAvailabilityClick}
                  className="text-[14px] md:text-[16px] font-bold bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  {isAvailable ? "In Stock" : "Out of Stock"}
                </Button>
              </div>

              <p className="text-[14px] md:text-[16px] text-[#727272] leading-relaxed mt-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>

              <div className="flex gap-3 mt-4">
                <FaCircle className="text-[#FFD700] text-[12px]" />
                <FaCircle className="text-[#FFD700] text-[12px]" />
                <FaCircle className="text-[#FFD700] text-[12px]" />
                <FaCircle className="text-[#FFD700] text-[12px]" />
              </div>

              {/* Select Options Button */}
              <Button
                onClick={handleSelectOptions}
                className="bg-[#252b42] text-white font-semibold py-2 px-6 mt-6 rounded-md shadow-lg hover:bg-[#333a52] transition duration-300"
              >
                Select Options
              </Button>
            </div>

            {/* Icons Section */}
            <div className="flex gap-4 mt-6">
              <Button
                onClick={handleFavorite}
                className="p-3 bg-gray-100 hover:bg-red-500 rounded-full transition duration-300"
                aria-label="Add to favorites"
              >
                <FaHeart className="text-red-500 text-[20px]" />
              </Button>
              <Button
                onClick={handleAddToCart}
                className="p-3 bg-gray-100 hover:bg-green-500 rounded-full transition duration-300"
                aria-label="Add to cart"
              >
                <FaCartPlus className="text-green-500 text-[20px]" />
              </Button>
              <Button
                onClick={handleViewDetails}
                className="p-3 bg-gray-100 hover:bg-blue-300 rounded-full transition duration-300"
                aria-label="View details"
              >
                <FaEye className="text-blue-500 text-[20px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flot;
