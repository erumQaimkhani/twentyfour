
import React from "react";

const Review2: React.FC = () => {
  const data = [
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountPrice: "$6.48",
      imgSrc: "/images/product1.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountPrice: "$6.48",
      imgSrc: "/images/product2.png",
    },
  
  ];

  return (
    <div className="main-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
        
          <div
            className="card-image h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.imgSrc})` }}
          />
    
          <div className="card-content p-4">
            <span className="block text-lg font-semibold text-gray-800">{item.title}</span>
            <span className="block text-sm text-gray-600">{item.department}</span>
            <div className="price flex items-center justify-between mt-2">
              <span className="text-sm line-through text-gray-400">{item.originalPrice}</span>
              <span className="text-sm font-semibold text-green-500">{item.discountPrice}</span>
            </div>
      
            <div className="icons flex space-x-2 mt-3">
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <div
                    key={i}
                    className="icon w-6 h-6 bg-cover hover:opacity-75 transition-opacity"
                    style={{ backgroundImage: `url(/images/icon${i + 1}.png)` }}
                    title={`Icon ${i + 1}`}
                  />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review2;
