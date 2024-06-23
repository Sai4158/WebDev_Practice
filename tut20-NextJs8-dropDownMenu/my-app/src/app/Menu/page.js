"use client";
import React, { useState } from "react";

const page = () => {
  const [open, Setopen] = useState(false);
  const toggleDropdown = () => Setopen(!open);

  return (
    <div>
      <button onClick={toggleDropdown}>menu</button>
    </div>
  );
};

export default page;
