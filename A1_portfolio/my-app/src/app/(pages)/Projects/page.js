"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <main className="pt-20 px-4">
          <section className="text-center mt-10">
            <h1 className="text-4xl font-bold">Projects & Hackathons</h1>
            <p className="text-lg mt-2">
              A showcase of my projects and hackathon experiences.
            </p>
          </section>

          <section className="max-w-6xl mx-auto mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* UMoments Project */}
            <div
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() =>
                window.open("https://github.com/Sai4158/UMoments", "_blank")
              }
            >
              <h2 className="text-2xl font-semibold mb-2">UMoments</h2>

              <a
                href="https://github.com/Sai4158/UMoments"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
              >
                GitHub Repo
              </a>
            </div>

            {/* Comcast OpenAI Challenge */}
            <div
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => window.open("https://lnkd.in/eH7DFtKP", "_blank")}
            >
              <h2 className="text-2xl font-semibold mb-2">
                Comcast OpenAI Challenge
              </h2>

              <a
                href="https://lnkd.in/eH7DFtKP"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
              >
                GitHub Repo
              </a>
              <a
                href="https://lnkd.in/e-Kcumji"
                target="_blank"
                className="text-blue-500 hover:text-blue-400 ml-4"
              >
                Try it out
              </a>

              <p className="mt-2">
                <strong>Hackathon:</strong> Philly Codefest
              </p>
            </div>

            {/* Icecream-store Project */}
            <div
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/Sai4158/Icecream-store",
                  "_blank"
                )
              }
            >
              <h2 className="text-2xl font-semibold mb-2">Icecream-store</h2>
              <p className="mb-2">
                Developing a website for an ice cream store using React, Vite,
                and Tailwind CSS. The website will be fully responsive and will
                support both dark and light themes.
              </p>

              <a
                href="https://github.com/Sai4158/Icecream-store"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
              >
                GitHub Repo
              </a>
            </div>

            {/* Random-Color-Generator Project */}
            <div
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() =>
                window.open(
                  "https://sai4158.github.io/Random-Color-Generator/",
                  "_blank"
                )
              }
            >
              <h2 className="text-2xl font-semibold mb-2">
                Random-Color-Generator
              </h2>
              <p className="mb-2">
                This web app changes the page's background color to a random
                gradient on button click. It features a modern, responsive
                button with hover effects, using HTML, CSS, and JavaScript.
              </p>
              <p>
                <strong>Technologies:</strong> HTML, CSS, JavaScript
              </p>
              <a
                href="https://github.com/Sai4158/Random-Color-Generator"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
              >
                GitHub Repo
              </a>
              <a
                href="https://sai4158.github.io/Random-Color-Generator/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400 ml-4"
              >
                Try it out
              </a>
            </div>

            {/* Air-Pollution-App Project */}
            <div
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() =>
                window.open(
                  "https://sai4158.github.io/Air-Pollution-App/",
                  "_blank"
                )
              }
            >
              <h2 className="text-2xl font-semibold mb-2">Air-Pollution-App</h2>
              <p className="mb-2">
                Air Pollution App is a simple web tool built with HTML, CSS, and
                JavaScript. It uses latitude and longitude inputs to fetch and
                display real-time air quality data from the OpenWeatherMap API.
              </p>
              <p>
                <strong>Technologies:</strong> HTML, CSS, JavaScript
              </p>
              <a
                href="https://github.com/Sai4158/Air-Pollution-App"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
              >
                GitHub Repo
              </a>
              <a
                href="https://sai4158.github.io/Air-Pollution-App/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400 ml-4"
              >
                Try it out
              </a>
            </div>

            {/* Cookie-Clicker Project */}
            <div
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() =>
                window.open(
                  "https://sai4158.github.io/Cookie-Clicker/",
                  "_blank"
                )
              }
            >
              <h2 className="text-2xl font-semibold mb-2">Cookie-Clicker</h2>
              <p className="mb-2">
                This is a simple cookie clicker made with JS, HTML, and CSS.
              </p>

              <a
                href="https://github.com/Sai4158/Cookie-Clicker"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
              >
                GitHub Repo
              </a>
              <a
                href="https://sai4158.github.io/Cookie-Clicker/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400 ml-4"
              >
                Try it out
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
