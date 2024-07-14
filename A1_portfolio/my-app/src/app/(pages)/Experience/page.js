"use client";

export default function page() {
  return (
    <div>
      <main className="pt-1 pb-4 px-4">
        {/* section 1  */}
        <section id="experience" className="">
          <h2 className="text-3xl font-semibold text-center">Experience</h2>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <p>
                <strong>High School:</strong> Garnet Valley High School
                <br />
                <strong>University:</strong> Third year student at The
                Pennsylvania State University, majoring in Human Centered Design
                & Development in the College of Information Sciences &
                Technology. Expected Graduation: May 2026
              </p>
            </div>

            {/* this is for the box */}
            <div className="bg-black bg-opacity-25 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-2">Internship</h3>
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
                Responsible for building out user settings at CTFGuide. Used
                React.js, TailwindCSS, Next.js, Git, and followed agile
                development practices.
              </p>
            </div>

            {/* section 3  */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>

              {/* added Bubble for the skills  */}
              {/* each span is Bubble */}

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-blue-700 text-white py-2 px-4 rounded-full">
                  Java
                </span>
                <span className="bg-green-700 text-white py-2 px-4 rounded-full">
                  JavaScript
                </span>
                <span className="bg-purple-700 text-white py-2 px-4 rounded-full">
                  React.js
                </span>
                <span className="bg-pink-700 text-white py-2 px-4 rounded-full">
                  Next.js
                </span>
                <span className="bg-red-700 text-white py-2 px-4 rounded-full">
                  Express.js
                </span>
                <span className="bg-yellow-700 text-white py-2 px-4 rounded-full">
                  Node.js
                </span>
                <span className="bg-indigo-700 text-white py-2 px-4 rounded-full">
                  SQL
                </span>
                <span className="bg-teal-700 text-white py-2 px-4 rounded-full">
                  MongoDB
                </span>
                <span className="bg-gray-700 text-white py-2 px-4 rounded-full">
                  Tailwind CSS
                </span>
                <span className="bg-blue-700 text-white py-2 px-4 rounded-full">
                  HTML5
                </span>
                <span className="bg-orange-700 text-white py-2 px-4 rounded-full">
                  Web Design
                </span>
                <span className="bg-red-700 text-white py-2 px-4 rounded-full">
                  Web Development
                </span>
                <span className="bg-yellow-700 text-white py-2 px-4 rounded-full">
                  Git
                </span>
                <span className="bg-green-700 text-white py-2 px-4 rounded-full">
                  CAD
                </span>
                <span className="bg-purple-700 text-white py-2 px-4 rounded-full">
                  Audio Engineering
                </span>
                <span className="bg-pink-700 text-white py-2 px-4 rounded-full">
                  FL Studio
                </span>
                <span className="bg-indigo-700 text-white py-2 px-4 rounded-full">
                  Adobe Audition
                </span>
                <span className="bg-teal-700 text-white py-2 px-4 rounded-full">
                  Adobe Illustrator
                </span>
                <span className="bg-gray-700 text-white py-2 px-4 rounded-full">
                  Video Editing
                </span>
                <span className="bg-blue-700 text-white py-2 px-4 rounded-full">
                  After Effects
                </span>
                <span className="bg-orange-700 text-white py-2 px-4 rounded-full">
                  Adobe Photoshop
                </span>
                <span className="bg-yellow-700 text-white py-2 px-4 rounded-full">
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
