"use client";

export default function Page() {
  return (
    <div>
      <main className="pt-1 pb-20 px-4">
        <section id="experience" className="">
          <h2 className="text-3xl  text-center">Experience</h2>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl  mb-2">Education</h3>

              <p className="leading-loose">
                <strong>High School:</strong> Garnet Valley High School
                <br />
                <br />
                <strong>University:</strong> Third year student at The
                Pennsylvania State University, majoring in{" "}
                <b>Human-Centered Design & Development</b> with a focus on{" "}
                <b>Data Science</b> in the College of Information Sciences &
                Technology.
                <br />
                <strong>Dean's List:</strong> Spring 2024
                <br />
                <strong>Expected Graduation:</strong> May 2026
              </p>
            </div>

            <div className="bg-black bg-opacity-25 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-2">Internship</h3>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="flex-none  lg:hidden md:hidden ">
                    <img
                      src="/Ctfguide.png"
                      alt="CTFGuide Logo"
                      width={100}
                      height={100}
                      className="hover:opacity-80 cursor-pointer"
                      onClick={() => router.push("https://ctfguide.com")}
                    />
                  </div>
                  <br />
                  <p>
                    <strong>Company:</strong> CTFGuide
                    <br />
                    <strong>Role:</strong> Software Engineer Intern
                    <br />
                    <strong>Duration:</strong> May 2024 - Present (3 months)
                    <br />
                    <strong>Location:</strong> State College, PA (Hybrid)
                    <br />
                    <br />
                    As a Software Engineer Intern at CTFGuide, I contributed to
                    building and optimizing user settings and profile settings.
                    My role involved working extensively with Next.js,
                    Javascript, TailwindCSS, React.js, Git, and agile
                    development practices.
                  </p>
                </div>
                {/* using div to make it next to each other using flex */}
                <div className="flex-none ml-4 sm:block hidden ">
                  <img
                    src="/Ctfguide.png"
                    alt="CTFGuide Logo"
                    width={200}
                    height={200}
                    className="hover:opacity-80 cursor-pointer"
                    onClick={() => router.push("https://ctfguide.com")}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Java
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  React.js
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Next.js
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Express.js
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Node.js
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  SQL
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  MongoDB
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Tailwind CSS
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  HTML5
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Web Design
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Web Development
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Git
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  CAD
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Audio Engineering
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  FL Studio
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Adobe Audition
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Adobe Illustrator
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Video Editing
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  After Effects
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Adobe Photoshop
                </span>
                <span className="bg-gray-800 text-white py-2 px-4 rounded-full">
                  Microsoft Office
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
