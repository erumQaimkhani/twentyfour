"use client";
import React, { useState } from "react";
import { FaTh, FaList, FaAngleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Show() {
  const [showGallery, setShowGallery] = useState(false);

  const handleGalleryOpen = () => {
    setShowGallery(true);
  };

  const handleGalleryClose = () => {
    setShowGallery(false);
  };


  const imageUrls = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product5.png",
    "/images/product6.png",
  ];

  return (
    <div className="main-container w-full max-w-[1440px] h-[98px] bg-white relative overflow-hidden mx-auto my-0">
      <div className="flex w-full max-w-[1050px] pt-6 pb-6 flex-col gap-20 items-center mx-auto">
        <div className="flex w-full max-w-[1049px] justify-between items-center">
     
          <div className="flex items-center gap-4">
            <Button
              onClick={handleGalleryOpen}
              className="text-sm font-bold text-gray-500 tracking-wide underline hover:text-blue-500"
            >
              Showing all 12 results
            </Button>
          </div>

       
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-500 tracking-wide">Views:</span>
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded border border-gray-300">
                <FaTh className="text-gray-500 w-4 h-4" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded border border-gray-300">
                <FaList className="text-gray-500 w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-[141px] h-[50px]">
              <div className="absolute inset-0 bg-gray-100 rounded border border-gray-300 flex items-center px-4">
                <span className="text-sm text-gray-500">Popularity</span>
                <FaAngleDown className="ml-2 text-gray-500" />
              </div>
            </div>
            <Button className="flex items-center justify-center px-5 py-2 bg-blue-500 text-white text-sm font-bold rounded">
              Filter
            </Button>
          </div>
        </div>
      </div>

      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-[600px] w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Image Gallery</h2>
              <Button
                onClick={handleGalleryClose}
                className="text-red-500 font-bold"
              >
                Close
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {imageUrls.map((url, index) => (
                <div key={index} className="w-full h-24 bg-gray-200">
                  <Image
                    src={url}
                    alt={`Image ${index + 1}`}
                    width={100} 
                    height={100} 
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
