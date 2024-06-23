"use client";
import React, { useState } from "react";
import Page from "../sai/Page";
const page = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  return (
    <div>
      <button onClick={toggleDropdown}>Menu</button>
      {open && (
        <div className="">
          <a href="sai" className=" ">
            Home
          </a>
          <Page />
        </div>
      )}
    </div>
  );
};

export default page;
