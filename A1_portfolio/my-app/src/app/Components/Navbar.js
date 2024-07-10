"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

// this is for the 3 dot menu
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-3 left- w-full bg-transparent  text-white z-50 ">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center  justify-between py-4">
        <div className="flex items-center justify-between w-full">
          <a className="text-2xl font-semibold" href="/">
            Sai Rangineeni
          </a>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
          <div className="hidden sm:flex space-x-8">
            <a
              className="flex items-center font-medium hover:text-gray-300"
              href="/"
            >
              <FaHome className="mr-2" />
              Home
            </a>
            <a
              className="flex items-center font-medium hover:text-gray-300"
              href="/Experience"
            >
              <FaUser className="mr-2" />
              Experience
            </a>
            <a
              className="flex items-center font-medium hover:text-gray-300"
              href="/Projects"
            >
              <FaProjectDiagram className="mr-2" />
              Projects
            </a>
            <a
              className="flex items-center font-medium hover:text-gray-300"
              href="/Contact"
            >
              <FaEnvelope className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* when the sc is small it will hide all */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 bg-opacity-90 p-4 space-y-4 mt-2 rounded shadow-lg ">
          <a
            className="block font-medium text-white hover:text-gray-300"
            href="/"
          >
            <FaHome className="mr-2 inline" />
            Home
          </a>
          <a
            className="block font-medium text-white hover:text-gray-300"
            href="/Experience"
          >
            <FaUser className="mr-2 inline" />
            Experience
          </a>
          <a
            className="block font-medium text-white hover:text-gray-300"
            href="/Projects"
          >
            <FaProjectDiagram className="mr-2 inline" />
            Projects
          </a>
          <a
            className="block font-medium text-white hover:text-gray-300"
            href="/Contact"
          >
            <FaEnvelope className="mr-2 inline" />
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
