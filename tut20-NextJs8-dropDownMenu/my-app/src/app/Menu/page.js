"use client";
import React, { useState } from "react";
const page = () => {
  const [open, setOpen] = useState(false);
  const [openn, setopenn] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const toggleDropdownnn = () => setopenn(!open);

  return (
    <div>
      <button onClick={toggleDropdown}>Menu</button>
      {open && (
        <div className="">
          <a href="sai" className=" ">
            Home
          </a>
        </div>
      )}

      <div>
        <button onClick={toggleDropdownnn}> click me</button>
        {openn && (
          <div>
            <a href="sai">sai</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
