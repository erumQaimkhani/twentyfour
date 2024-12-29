
import React from "react";
import { Toggle } from "@radix-ui/react-toggle";

const Login = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded shadow-md p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Log In
        </h1>
        <form className="flex flex-col gap-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Login Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300">
            Log In
          </button>
        </form>
        {/* Toggle Option */}
        <div className="flex justify-center items-center mt-6">
          <Toggle
            className="w-10 h-6 bg-gray-200 rounded-full relative flex items-center justify-between cursor-pointer focus:outline-none"
          >
            <span className="block w-5 h-5 bg-green-500 rounded-full transition-transform transform translate-x-1" />
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default Login;
