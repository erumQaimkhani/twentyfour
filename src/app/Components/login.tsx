
"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "@/components/ui/button"; 
import { FiEye, FiEyeOff } from "react-icons/fi"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [isVisible, setIsVisible] = useState(true); 
  const navigate = useNavigate(); 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
   
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      
    
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
      } else {
        setError("Something went wrong!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 sm:px-12">
      <div className="text-center mb-6">
        <Button
          onClick={() => setIsVisible(!isVisible)}
          className="py-2 px-6 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          {isVisible ? "Hide Login" : "Show Login"}
        </Button>
      </div>

      {isVisible && (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Welcome Back
          </h1>

          {/* Display error message if any */}
          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

       
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <span
                className="absolute top-2/3 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>

         
            <Button
              type="submit"
              className="w-full py-3 rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300"
            >
              Log In
            </Button>
          </form>

         
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-green-600 hover:underline">
                Sign Up
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Forgot Password?{" "}
              <a href="/forgot-password" className="text-green-600 hover:underline">
                Reset it here
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
