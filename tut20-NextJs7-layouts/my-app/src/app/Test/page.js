// when using use state in next js make sure to import this
"use client";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-40 bg-white shadow-md flex flex-col ">
          <a href="#" className="px-4 py-2 gap-5 hover:bg-gray-100">
            Test
          </a>
          <a href="#" className="px-4 py-2 gap-5 hover:bg-gray-100">
            Test1
          </a>
          <a href="#" className="px-4 py-2 gap-5 hover:bg-gray-100">
            Test2
          </a>
          <a href="#" className="px-4 py-2 mr-4 hover:bg-gray-100">
            Test3
          </a>
          <a href="#" className="px-4 py-2 gap-5 hover:bg-gray-100">
            Test4
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
