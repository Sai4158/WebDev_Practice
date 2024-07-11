"use client";

export default function Projects() {
  return (
    <div>
      <main className="pt-20 px-4">
        <section className="text-center mt-10">
          <h1 className="text-4xl font-bold">Projects & Hackathons</h1>
          <p className="text-lg mt-2">
            A showcase of my projects and hackathon experiences.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 masonry">
          {/* UMoments Project tile*/}
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
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://umoment-frontend.vercel.app/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 z-40"
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Comcast OpenAI Challenge */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside"
            onClick={() => window.open("https://lnkd.in/eH7DFtKP", "_blank")}
          >
            <h2 className="text-2xl font-semibold mb-2">
              Comcast OpenAI Challenge
            </h2>
            <p className="mb-2">
              AI-powered chat assistant for Comcast. Built with JavaScript, CSS.
            </p>
            <p>
              <strong>Team:</strong> 2 members
            </p>
            <p>
              <strong>Hackathon:</strong> Philly Codefest
            </p>
            <a
              href="https://lnkd.in/eH7DFtKP"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://lnkd.in/e-Kcumji"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
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
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Random-Color-Generator/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
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
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Air-Pollution-App/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
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
            >
              GitHub Repo
            </a>
            <div className="mt-4">
              <a
                href="https://sai4158.github.io/Cookie-Clicker/"
                target="_blank"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Try it out
              </a>
            </div>
          </div>

          {/* Other projects */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside">
            <h2 className="text-2xl font-semibold mb-2">Other Projects</h2>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://github.com/Sai4158/JavaGUI_Practice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  JavaGUI_Practice
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sai4158/WebDev_Practice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  WebDev_Practice
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sai4158/JAVA-IST242"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  JAVA-IST242
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sai4158/JAVA-IST140"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  JAVA-IST140
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sai4158/JavaPractice"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  JavaPractice
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
