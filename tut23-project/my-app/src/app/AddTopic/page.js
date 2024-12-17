"use client";

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventdefault();

    if (!title || !description) {
      alert("Please enter data");
      return;
    }

    try {
      await fetch("http://localhost:3000/models/Api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    } catch (error) {}
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mx-80"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Topic Title"
          className="border border-slate-500 px-8 py-2"
        />

        {/* Topic desc */}
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Topic description"
          className="border border-slate-500 px-8 py-2"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-green-600 font-bold  text-white py-3 px-4"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default page;
