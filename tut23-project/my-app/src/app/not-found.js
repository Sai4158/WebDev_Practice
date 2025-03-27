"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-12">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img
          src="/Dealscape.png"
          alt="DealScape Logo"
          className="w-40 sm:w-48 md:w-56 lg:w-64 drop-shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Right: Text Content */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800">Oh no! 😵</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Looks like you ended up on the wrong aisle.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
        >
          🛒 Take Me Home
        </Link>
      </div>
    </div>
  );
}
