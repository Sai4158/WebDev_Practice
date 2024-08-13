"use client";

import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const catHandler = async (event) => {
    event.preventDefault(); // Prevent form from causing a page reload

    const response = await fetch("http://localhost:3000/api/Cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ catName: name, catColor: color }),
    });

    if (response.ok) {
      alert("Cat added successfully");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={catHandler}
        className="bg-slate-500 px-44 py-20 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <h1 className="text-lg  mb-2">Enter cat name</h1>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <h1 className="text-lg  mb-2">Enter cat color</h1>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add cat
        </button>
      </form>
    </div>
  );
};

export default Page;
