"use client";

import React, { useState } from "react";

const page = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  return (
    <div>
      <button onClick={toggleDropdown}>Menu</button>
      {open && (
        <div className="absolute">
          <a href="sai" className="block ">
            Home
          </a>
        </div>
      )}
    </div>
  );
};

export default page;
