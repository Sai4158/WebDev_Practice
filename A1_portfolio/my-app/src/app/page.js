"use client";

export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <main className="flex items-center justify-center h-full">
        {/* Profile Picture Section */}
        <div className="relative flex flex-col items-start text-left space-y-6 bg-opacity-50 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <img
            src="A1_portfolio\my-app\src\images\Sai_Profile_pic.jpg"
            alt="Sai Rangineeni"
            className="absolute top-0 left-0 w-1/3 h-full object-cover rounded-l-lg shadow-lg"
          />
          <div className="ml-auto w-2/3 p-6 bg-black bg-opacity-10 backdrop-blur-lg rounded-r-xl shadow-lg">
            <h1 className="text-5xl font-bold text-white mb-4">
              Sai Rangineeni
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              <strong>PSU Student</strong> | Human-Centered Design & Development
              | Software Engineer Intern @ CTFGuide
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <strong>Skills:</strong> React.js, TailwindCSS, Next.js,
              JavaScript, Node.js, SQL, MongoDB, Git
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong>Interests:</strong> Web Development, UI/UX Design, Agile
              Development, Music Production, Graphic Design
            </p>
            <a
              href="/Contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
