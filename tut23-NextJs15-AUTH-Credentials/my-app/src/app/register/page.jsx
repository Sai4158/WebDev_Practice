"use client";
// This if for the login form

import React, { useState } from "react";
import { registerAction } from "../ServerActions/registeraction";

const page = () => {
  // UseState for the fields

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // onchange function - onSubmit - form
  const registerHandler = async (e) => {
    e.preventDefault();
    const registerDetails = {
      Username,
      Email,
      Password,
      role: "user",
    };
    console.log("This is register text", registerDetails);
    await registerAction(registerDetails);
  };
  return (
    // Make a form
    <div className="form-container">
      <form action="" className="formSection" onSubmit={registerHandler}>
        <h3>Username:</h3>
        <input
          type="text"
          name="username"
          id=""
          className="input1"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Email:</h3>
        <input
          type="email"
          name="email"
          id=""
          className="input1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password:</h3>
        <input
          type="text"
          name="password"
          id=""
          className="input1"
          // Takes this value here updates the use state
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default page;
