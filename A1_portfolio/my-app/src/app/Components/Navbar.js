"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// this is for the 3 dot menu
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white ">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between py-4">
        <a className="text-2xl font-semibold" href="/">
          Sai Rangineeni
        </a>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
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
      </nav>

      {/* Sidebar for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-64 
           bg-gray-800 bg-opacity-80 backdrop-blur-lg p-6 z-50 transform transition-transform duration-300 ${
             isMenuOpen ? "translate-x-0" : "translate-x-full"
           } rounded-l-lg shadow-lg sm:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="text-2xl text-white absolute top-4 right-4 focus:outline-none"
        >
          <FaTimes />
        </button>
        <nav className="mt-10 space-y-4">
          <a
            className="block text-white font-medium hover:text-gray-300"
            href="/"
          >
            <FaHome className="mr-2 inline" />
            Home
          </a>
          <a
            className="block text-white font-medium hover:text-gray-300"
            href="/Experience"
          >
            <FaUser className="mr-2 inline" />
            Experience
          </a>
          <a
            className="block text-white font-medium hover:text-gray-300"
            href="/Projects"
          >
            <FaProjectDiagram className="mr-2 inline" />
            Projects
          </a>
          <a
            className="block text-white font-medium hover:text-gray-300"
            href="/Contact"
          >
            <FaEnvelope className="mr-2 inline" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
