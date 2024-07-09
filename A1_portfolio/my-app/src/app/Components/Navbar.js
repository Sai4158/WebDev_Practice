import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center justify-between w-full">
          <a className="text-2xl font-semibold" href="/">
            Portfolio
          </a>
          <div className="hidden sm:flex space-x-8">
            <a
              className="flex items-center font-medium hover:text-gray-300"
              href="/Home"
            >
              <FaHome className="mr-2" />
              Home
            </a>
            <a
              className="flex items-center font-medium hover:text-gray-300"
              href="/About"
            >
              <FaUser className="mr-2" />
              About Me
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
    </header>
  );
};

export default Navbar;
