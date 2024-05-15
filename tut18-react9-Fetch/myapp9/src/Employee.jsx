import React from "react";
import App from "./App.css";
import { useState } from "react";
const Employee = () => {
  // use state for all the
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");

  const empDetails = { name, role, email, dept };

  //  will create a function
  const empHandler = async (e) => {
    e.preventDefault();
    console.log(empDetails);

    // const response = await fetch("http://mongodb://localhost:27017");
  };

  return (
    <div className="empform">
      <form onSubmit={empHandler} className="form-container">
        <label className="form-label">Employee Name</label>
        <input
          type="text"
          name="name"
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="form-label">Employee Role</label>
        <input
          type="text"
          name="role"
          className="form-input"
          onChange={(e) => setRole(e.target.value)}
        />

        <label className="form-label">Employee Email</label>
        <input
          type="text"
          name="email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label">Employee Department</label>
        <input
          type="text"
          name="dept"
          className="form-input"
          onChange={(e) => setDept(e.target.value)}
        />

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Employee;
