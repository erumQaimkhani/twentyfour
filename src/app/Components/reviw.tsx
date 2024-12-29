
"use client";
import React, { useState } from "react";


const Review: React.FC = () => {

  const [activeTab, setActiveTab] = useState("description");


  const tabs = [
    { id: "description", label: "Description", path: "/description" },
    { id: "additional-information", label: "Additional Information", path: "/additional-information" },
    { id: "reviews", label: "Reviews (0)", path: "/reviews" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 bg-white">
  
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-center text-sm font-semibold px-4 py-2 ${
              activeTab === tab.id ? "text-green-500 border-b-2 border-green-500" : "text-gray-500 hover:text-green-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      
      <div>
        {activeTab === "description" && (
          <div className="text-gray-700">
            <p>This is the description section. You can add product details here.</p>
          </div>
        )}
        {activeTab === "additional-information" && (
          <div className="text-gray-700">
            <p>This is the additional information section. Add more specific details here.</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-gray-700">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>

  
      <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Review Title</h3>
          <p className="text-sm text-gray-600">This is a placeholder for a product review.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Review Title</h3>
          <p className="text-sm text-gray-600">This is another placeholder for a product review.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
