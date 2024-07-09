import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold" href="/">
            My Portfolio
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-with-collapse"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
            ></button>
          </div>
        </div>
        <div
          id="navbar-with-collapse"
          className="hidden transition-all duration-1000 overflow-hidden basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a
              className="font-medium text-blue-500"
              href="/Home"
              aria-current="page"
            >
              <FaHome className="h-6 w-6 inline mr-2" />
              Home
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400"
              href="/About"
            >
              <FaUser className="h-6 w-6 inline mr-2" />
              About Me
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400"
              href="/Projects"
            >
              <FaProjectDiagram className="h-6 w-6 inline mr-2" />
              Projects
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400"
              href="/Contact"
            >
              <FaEnvelope className="h-6 w-6 inline mr-2" />
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
