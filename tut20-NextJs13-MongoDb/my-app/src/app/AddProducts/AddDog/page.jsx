"use client";

import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const dogDataHandler = async () => {
    const response = await fetch("http://localhost:3000/api/dogs", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ DogName: name, DogBreed: breed, DogAge: age }),
    });

    if (response.ok) {
      alert("Dog added successfully");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={dogDataHandler}
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Dog name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Dog breed</h3>
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Dog age</h3>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add Dog
        </button>
      </form>
    </div>
  );
};

export default Page;
