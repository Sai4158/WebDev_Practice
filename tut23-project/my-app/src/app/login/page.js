"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  const onHandle = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    if (response.data.message === "Login is successful") {
      localStorage.setItem("name", response.data.name); // store name for home page
      router.push("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-5xl overflow-hidden">
        {/* Left: Login Form */}
        <form
          onSubmit={onHandle}
          className="w-1/2 p-10 space-y-5 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-extrabold text-blue-700 text-center">
            Sign In
          </h2>

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
            Login
          </button>

          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </form>

        {/* Right: Info message */}
        <div className="w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold">
            Get Access to Exclusive Deals 💸
          </h2>
          <p className="text-lg">
            Sign in and start saving on your favorite brands.
            <br />
          </p>
          <p className="text-sm opacity-80 italic">
            <a target="_blank" href="https://github.com/Sai4158">
              Powered by DealScape 🛍️
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
