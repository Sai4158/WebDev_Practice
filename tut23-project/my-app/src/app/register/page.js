"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Registration() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  const onHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
      });

      if (response.data.message === "User created") {
        toast.success("✅ Account created successfully!");
        setTimeout(() => router.push("/login"), 1500);
      } else if (response.data.error === "User already exist") {
        toast.error("⚠️ User already exists!");
      } else {
        toast.warn("⚠️ Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error("❌ Registration failed. Server error.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-cyan-300 flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="bg-blue-100 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Left side logo and info */}
        <div className="w-full md:w-1/2 bg-gray-200 text-center p-8 md:p-10 flex flex-col justify-center items-center">
          <img
            src="/Dealscape.png"
            alt="DealScape Logo"
            className="sm:w-32 md:w-52 lg:w-100 mb-6 object-contain"
          />
          <h3 className="text-2xl text-gray-800 mb-2">
            Find Best Deals Online 🛍️
          </h3>
          <p className="text-sm text-gray-500">
            No credit card required. Create your DealScape account today!
          </p>
        </div>

        {/* Right side form */}
        <form
          onSubmit={onHandle}
          className="w-full md:w-1/2 p-8 md:p-5 bg-gray-100 flex flex-col justify-center space-y-5"
        >
          <h2 className="text-3xl text-blue-400 text-center">Create Account</h2>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setname(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => setpassword(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-blue-400 font-medium hover:underline cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </form>
      </div>

      {/* Toastify container */}
      <ToastContainer position="top-center" />
    </div>
  );
}
