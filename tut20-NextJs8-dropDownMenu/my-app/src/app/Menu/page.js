"use client";
import React, { useState } from "react";
import Page from "../sai/Page";
const page = () => {
  const [open, setOpen] = useState(false);
  const [openn, setopenn] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const toggleDropdownnn = () => setOpen(!open);

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
