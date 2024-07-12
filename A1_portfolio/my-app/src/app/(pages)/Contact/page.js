"use client";
import React from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again.");
      }
    );
    e.target.reset();
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <form
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="from_name"
          >
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="reply_to"
          >
            Email
          </label>
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-10 text-center">
        <p className="text-lg mb-4">Or reach me via:</p>
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
  );
};

export default Contact;
