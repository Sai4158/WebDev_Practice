"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="relative w-full max-w-4xl bg-opacity-50 p-10 rounded-lg shadow-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img
            src="https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg"
            alt="Sai Rangineeni"
            className="w-full h-full object-cover opacity-15 blur-sm"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full">
          {/* Profile Picture Section */}
          <div className="relative w-full md:w-1/3 flex justify-center md:justify-end p-4">
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img
                src="https://i.ibb.co/dQGwy7w/Sai-Profile-pic.jpg"
                alt="Sai Rangineeni"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">
              Sai Rangineeni
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              PSU Student | Human-Centered Design & Development | Software
              Engineer Intern @ CTFGuide
            </p>
            <p className="text-xl text-gray-300 mb-4">
              React.js, TailwindCSS, Next.js, JavaScript, Node.js, SQL, MongoDB,
              Git
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Interests: Web Development, UI/UX Design, Agile Development, Music
              Production, Graphic Design
            </p>
            <a
              href="/Contact"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            >
              Contact Me
            </a>
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/sairangineeni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Sai4158"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="mailto:sairangineeni1@gmail.com"
                className="text-blue-500 hover:text-blue-400 transition duration-300"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
