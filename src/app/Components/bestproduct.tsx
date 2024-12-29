
import React from "react";
import LogosSection from "./logosection";
import Greenheader from "./greenheader";
import Image from "next/image";

export default function BestProduct() {
  const products = [
    {
      Image: "/images/pinkset.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      Image: "/images/glass.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      Image: "/images/plate.png",
      title: "Web Development",
      department: "Tech Department",
      originalPrice: "$20.00",
      discountedPrice: "$10.00",
    },
    {
      Image: "/images/greenplate.png",
      title: "SEO Optimization",
      department: "Marketing Department",
      originalPrice: "$25.00",
      discountedPrice: "$12.00",
    },
    {
      Image: "/images/cups.png",
      title: "SEO Optimization",
      department: "Marketing Department",
      originalPrice: "$25.00",
      discountedPrice: "$12.00",
    },
    {
      Image: "/images/woodenchair.png",
      title: "SEO Optimization",
      department: "Marketing Department",
      originalPrice: "$25.00",
      discountedPrice: "$12.00",
    },
    {
      Image: "/images/pinkset.png",
      title: "SEO Optimization",
      department: "Marketing Department",
      originalPrice: "$25.00",
      discountedPrice: "$12.00",
    },
    {
      Image: "/images/glass.png",
      title: "SEO Optimization",
      department: "Marketing Department",
      originalPrice: "$25.00",
      discountedPrice: "$12.00",
    },
  ];

  return (
    <div className="main-container max-w-[1440px] mx-auto bg-[#f9f9f9] py-12 px-4">
      <Greenheader />
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#252b42] tracking-wide">
          BESTSELLER PRODUCTS
        </h2>
        <div className="w-24 h-1 bg-[#ebebeb] mx-auto mt-2" />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image */}
            <div className="h-56 relative bg-gray-100">
              <Image
                src={product.Image}
                alt={product.title}
                className="w-full h-full object-cover"
                width={300}
                height={300}
                priority
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#252b42]">
                {product.title}
              </h3>
              <p className="text-sm text-[#727272]">{product.department}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice}
                </span>
                <span className="text-lg text-[#23856d] font-bold">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Logos Section */}
      <div className="mt-12">
        <LogosSection />
      </div>
    </div>
  );
}
