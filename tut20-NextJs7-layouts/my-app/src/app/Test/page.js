"use client";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={toggleDropdown}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-40 bg-white shadow-lg flex flex-col mt-1 rounded-md">
          <a
            href="#"
            className="block px-4 py-2 hover:bg-blue-100 text-blue-800"
          >
            Home <i className="fas fa-home"></i>
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-green-100 text-green-800"
          >
            Profile <i className="fas fa-user"></i>
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-red-100 text-red-800">
            Messages <i className="fas fa-envelope"></i>
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-yellow-100 text-yellow-800"
          >
            Settings <i className="fas fa-cog"></i>
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-purple-100 text-purple-800"
          >
            Logout <i className="fas fa-sign-out-alt"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
