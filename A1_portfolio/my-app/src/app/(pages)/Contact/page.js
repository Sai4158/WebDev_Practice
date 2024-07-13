"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const page = () => {
  const [loading, setLoading] = useState(false);

  //   this is for the function to send the email
  function sendEmail(e) {
    e.preventDefault();

    // set sppinner to true when button is clicked
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
          //   in the then use the false so it will stop spinning
          //  .then is rendered when id are fectched
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Failed to send the message. Please try again or email me.",
            {
              position: "bottom-center",
            },

            toast.error(
              "Failed to send the message. Please try again or email me.",
              {
                position: "top-center",
              }
            )
          );
          setLoading(false);
        }
      );
    e.target.reset();
  }

  return (
    <main className="pt-14 pb-14 px-4 z-10">
      <ToastContainer />
      <div className="mt-12">
        <div className="max-w-6xl mx-auto mt-10 p-6">
          <h1 className="text-4xl font-bold text-center mb-6 text-white">
            Contact Me
          </h1>
          <form
            onSubmit={sendEmail}
            className="max-w-md mx-auto bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-70 backdrop-blur-md transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="reply_to"
              >
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                required
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-70 backdrop-blur-md transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-70 backdrop-blur-md transition duration-300"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                disabled={loading}
              >
                {/* if the loaidn true then spinner if flase then it will come to word send */}
                {loading ? <ClipLoader size={24} color={"#ffffff"} /> : "Send"}
              </button>
            </div>
          </form>
          <div className="mt-10 text-center">
            <p className="text-lg mb-4 text-white">Or reach me via:</p>
            <div className="flex justify-center space-x-6">
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
      </div>
    </main>
  );
};

export default page;
