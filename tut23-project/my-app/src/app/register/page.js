"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Registration() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  const onHandle = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/register", {
      name,
      email,
      password,
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form
        onSubmit={onHandle}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <div className="flex flex-col">
          <label className="mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setname(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Email</label>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Email"
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Password</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="*********"
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
