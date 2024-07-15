"use client";

export default function Projects() {
  return (
    <div>
      <main className="pt-2 px-4 pb-12 mb-14 ">
        <section className="text-center ">
          <h1 className="text-4xl font-bold">Hackathons & Projects</h1>
          <p className="text-lg mt-4">
            A showcase of my hackathons and projects experiences.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 masonry ">
          {/* Comcast Inquire */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
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
            <br />
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
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all	"
            onClick={() =>
              window.open("https://devpost.com/software/umoment", "_blank")
            }
          >
            <h2 className="text-2xl font-semibold mb-2">UMoments</h2>
            <p className="mb-2">
              UMoments serves as a centralized hub for university students to
              discover and keep track of events happening on and around campus.
              <br /> <br />
              Built with Next.js, TailwindCSS, Express.js, Node.js, Auth0,
              MongoDB.
            </p>
            <br />
            <p>
              <strong>Team:</strong> 5 members
            </p>
            <p>
              <strong>Hackathon:</strong> HackPSU Spring 2024
            </p>
            <br />
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
          {/* Pizza Bill Generator Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
            onClick={() =>
              window.open(
                "https://github.com/Sai4158/JavaPractice/tree/master/src/pizza_bill_genrator_project",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl font-semibold mb-2">
              Pizza Bill Generator
            </h2>
            <p className="mb-2">
              A comprehensive pizza billing system that demonstrates OOP
              principles, including inheritance, encapsulation, and
              polymorphism. The project calculates the final bill based on
              selected toppings and extras.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Base pizza options for vegetarian and non-vegetarian</li>
              <li>
                Additional toppings and extras such as extra cheese and chicken
              </li>
              <li>Takeaway option with additional packaging cost</li>
              <li>Encapsulation of price calculation and bill generation</li>
            </ul>
            <p>
              <strong>Languages:</strong> Java
            </p>
            <a
              href="https://github.com/Sai4158/JavaPractice/tree/master/src/pizza_bill_genrator_project"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Air-Pollution-App Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
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
              JavaScript. <br /> <br />
              It uses latitude and longitude inputs to fetch and display
              real-time air quality data from the OpenWeatherMap API.
            </p>
            <br />
            <br />
            <p>
              <strong>Languages:</strong> JavaScript, CSS, HTML
            </p>
            <br />
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

          {/* Banking App Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
            onClick={() =>
              window.open(
                "https://github.com/Sai4158/JavaPractice/tree/master/src/bankingApp",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl font-semibold mb-2">Banking App</h2>
            <p className="mb-2">
              A simple banking application demonstrating OOP principles. It
              includes features for depositing and withdrawing money, and
              managing account details such as account number, balance, name,
              email, and phone.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>
                Account creation with details: number, balance, name, email,
                phone
              </li>
              <li>Deposit and withdraw money with balance checks</li>
              <li>Getter and setter methods for account attributes</li>
            </ul>
            <p>
              <strong>Languages:</strong> Java
            </p>
            <a
              href="https://github.com/Sai4158/JavaPractice/tree/master/src/bankingApp"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Telecommunication Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
            onClick={() =>
              window.open(
                "https://github.com/Sai4158/JavaPractice/tree/master/src/telecommunicationProject",
                "_blank"
              )
            }
          >
            <h2 className="text-2xl font-semibold mb-2">
              Telecommunication Project
            </h2>
            <p className="mb-2">
              A comprehensive project showcasing various Java concepts applied
              in a real-world telecommunication system.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Management of user data and telecommunications</li>
              <li>Implementation of advanced OOP principles</li>
              <li>Error handling and data validation</li>
            </ul>
            <p>
              <strong>Languages:</strong> Java
            </p>
            <a
              href="https://github.com/Sai4158/JavaPractice/tree/master/src/telecommunicationProject"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repo
            </a>
          </div>

          {/* Icecream-store Project */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
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
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
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
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
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
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md cursor-pointer break-inside hover:scale-105 transition-all"
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
