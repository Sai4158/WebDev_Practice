"use client";

import React, { useState } from "react";

const Register = () => {
  // Set state for the form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const registerDetails = { username, email, password };
    console.log("Register Details:", registerDetails);

    // Reset them after
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md w-96"
      >
        <h3 className="text-lg mb-4 text-center">Register Form</h3>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="border p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
