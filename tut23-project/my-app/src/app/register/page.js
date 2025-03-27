"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Registration() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  const onHandle = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/register", {
      name,
      email,
      password,
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-pink-200 flex items-center justify-center px-6">
      <div className="bg-blue-100 rounded-2xl shadow-2xl flex w-full max-w-5xl overflow-hidden">
        {/* Left side with logo and text */}
        <div className="w-1/2 bg-white text-center p-10 flex flex-col justify-center items-center space-y-4">
          <img
            src="/Dealscape.png"
            alt="DealScape Logo"
            className="w-100 h-100 object-contain"
          />
          <div className="mt-6 space-y-3">
            <h3 className="text-2xl font-semibold text-gray-800">
              Get Free Shopping Coupons 🎁
            </h3>
            <p className="text-sm text-gray-500">
              No credit card required. Make a account today! 😎
            </p>
          </div>
        </div>

        {/* Right side form */}
        <form
          onSubmit={onHandle}
          className="w-1/2 p-10 space-y-5 flex flex-col justify-center bg-blue-50"
        >
          <h2 className="text-3xl font-extrabold text-blue-700 text-center">
            Create Account
          </h2>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setname(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => setpassword(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
