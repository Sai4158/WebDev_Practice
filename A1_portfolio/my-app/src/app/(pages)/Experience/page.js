"use client";

import Navbar from "@/app/Components/Navbar";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <main className="pt-20 px-4">
        <section id="experience" className="mt-20">
          <h2 className="text-3xl font-semibold text-center">Experience</h2>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">Education</h3>
              <p className="mt-2">
                <strong>High School:</strong> Garnet Valley High School
                <br />
                <strong>University:</strong> Third year student at The
                Pennsylvania State University, majoring in Human Centered Design
                & Development in the College of Information Sciences &
                Technology. Expected Graduation: May 2026
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">Internship</h3>
              <p className="mt-2">
                <strong>Company:</strong> CTFGuide
                <br />
                <strong>Role:</strong> Software Engineer Intern
                <br />
                <strong>Duration:</strong> May 2024 - Present (3 months)
                <br />
                <strong>Location:</strong> State College, PA (Hybrid)
                <br />
                Responsible for building out user settings at CTFGuide. Used
                React.js, TailwindCSS, Next.js, Git, and followed agile
                development practices.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">Skills</h3>
              <p className="mt-2">
                <strong>Proficient in:</strong>
                <br />
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
