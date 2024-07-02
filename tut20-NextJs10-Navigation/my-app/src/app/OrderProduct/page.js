"use client";
import React from "react";

const page = () => {
  const handleClick = () => {
    document.write("Hello I am Sai");
  };

  return (
    <div>
      <h1>This is the order page</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default page;
