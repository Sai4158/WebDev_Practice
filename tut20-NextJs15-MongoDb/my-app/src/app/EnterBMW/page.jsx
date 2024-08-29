"use client";

import React, { useState } from "react";

const page = (params) => {
  const id = params.Prodcutid;
  const [name, setName] = useState("");

  const carHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/api/BMW`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id }),
    });

    const data = await response.json();
    console.log("Response from POST request: ", data);
  };

  return (
    <div>
      <form
        onSubmit={carHandler}
        className="bg-slate-500 px-44 py-20 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <h1 className="text-lg mb-2">Enter car name</h1>
          <input
            className="w-full p-2 border border-gray-300 rounded placeholder-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter car name"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add car
        </button>
      </form>
    </div>
  );
};

export default page;
