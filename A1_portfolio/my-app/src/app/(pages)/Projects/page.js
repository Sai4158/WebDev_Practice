"use client";

export default function Projects() {
  return (
    <div>
      <main className="pt-20 px-4 mb-14">
        <section className="text-center mt-10">
          <h1 className="text-4xl font-bold">Hackathons & Projects</h1>
          <p className="text-lg mt-2">
            A showcase of my hackathons and projects experiences.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 masonry">
          {/* Comcast Inquire */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() =>
              window.open(
                "https://github.com/Laphatize/comcast-inquire",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl font-semibold mb-2">Comcast Inquire</h2>
            <p className="mb-2">
              Supercharged chat assistant for Comcast sales and marketing. Built
              with Next.js, Clerk, Redis, Railway, GPT-4, TailwindCSS.
            </p>
            <br />
            <p>
              <b>
                <strong>Winning project</strong>
              </b>
            </p>
            <p>
              <strong>Team:</strong> Sai Rangineeni, Pranav Ramesh
            </p>
            <p>
              <strong>Hackathon:</strong> Winning Project at Philly Codefest
            </p>
            <a
              href="https://github.com/Laphatize/comcast-inquire"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://comcast-inquire.vercel.app/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/watch?v=mzkpEsekaKg"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Video Demo
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://drexel.edu/cci/stories/hundreds-of-coders-harness-ai-for-social-good-at-philly-codefest-2024-sponsored-by-drexel-cci/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Article
              </a>
            </div>
          </div>

          {/* UMoments Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() =>
              window.open("https://devpost.com/software/umoment", "_blank")
            }
          >
            <h2 className="text-2xl font-semibold mb-2">UMoments</h2>
            <p className="mb-2">
              Centralized hub for university events. Built with Next.js,
              TailwindCSS, Express.js, Node.js, Auth0, MongoDB.
            </p>
            <br />
            <p>
              <strong>Team:</strong> 5 members
            </p>
            <p>
              <strong>Hackathon:</strong> HackPSU Spring 2024
            </p>
            <a
              href="https://github.com/umoment-tech"
              target="_blank"
              className="text-blue-500 hover:text-blue-400 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://umoment-frontend.vercel.app/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 z-40"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Air-Pollution-App Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() =>
              window.open(
                "https://sai4158.github.io/Air-Pollution-App/",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl font-semibold mb-2">Air-Pollution-App</h2>
            <p className="mb-2">
              Real-time air quality data. Built with HTML, CSS, JavaScript.
            </p>
            <p>
              <strong>Languages:</strong> JavaScript, CSS, HTML
            </p>
            <a
              href="https://github.com/Sai4158/Air-Pollution-App"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Air-Pollution-App/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Icecream-store Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() =>
              window.open("https://github.com/Sai4158/Icecream-store", "_blank")
            }
          >
            <h2 className="text-2xl font-semibold mb-2">Icecream-store</h2>
            <p className="mb-2">
              Responsive ice cream store website. Built with React, Vite,
              TailwindCSS.
            </p>
            <p>
              <strong>Languages:</strong> JavaScript, CSS, HTML
            </p>
            <a
              href="https://github.com/Sai4158/Icecream-store"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Random-Color-Generator Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
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
              Random gradient background generator. Built with HTML, CSS,
              JavaScript.
            </p>
            <p>
              <strong>Languages:</strong> JavaScript, CSS, HTML
            </p>
            <a
              href="https://github.com/Sai4158/Random-Color-Generator"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Random-Color-Generator/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Cookie-Clicker Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() =>
              window.open("https://sai4158.github.io/Cookie-Clicker/", "_blank")
            }
          >
            <h2 className="text-2xl font-semibold mb-2">Cookie-Clicker</h2>
            <p className="mb-2">
              Simple cookie clicker game. Built with JavaScript, HTML, CSS.
            </p>
            <p>
              <strong>Languages:</strong> JavaScript, CSS, HTML
            </p>
            <a
              href="https://github.com/Sai4158/Cookie-Clicker"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Cookie-Clicker/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Other projects */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() => window.open("https://github.com/Sai4158", "_blank")}
          >
            <h2 className="text-2xl font-semibold mb-2">Other Projects</h2>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://github.com/Sai4158/WebDev_Practice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Web development
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Sai4158/JavaPractice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Java
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
