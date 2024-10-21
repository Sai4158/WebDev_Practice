"use client";
import React from "react";

const Page = () => {
  function toggleONandOFF() {
    const element = document.getElementById("para");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  return (
    <div>
      <p id="para">This text can be hidden by a click</p>
      <br />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleONandOFF}
      >
        Toggle Text
      </button>
    </div>
  );
};

export default Page;
