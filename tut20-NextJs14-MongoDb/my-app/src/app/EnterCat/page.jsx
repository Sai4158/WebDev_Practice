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
    <div className="place-items-center">
      <form onSubmit={catHandler}>
        <div>
          <h1>Enter name</h1>
          <input
            className="text-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <h1>Enter color</h1>
          <input
            className="text-black"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit">Add cat</button>
      </form>
    </div>
  );
};

export default Page;
