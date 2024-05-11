import React from "react";
import { useState } from "react";

const FormExample = () => {
  // this is store the data -1
  const [username, setUsername] = useState("");
  //this is to update only when clicked -2
  const [userdetails, setUserdeatails] = useState("");

  //will update it in username using the useState -1
  const getUserName = (event) => {
    setUsername(event.target.value);
  };

  //will only update when submit button is clicked -2
  const update = (event) => {
    event.preventDefault();
    setUserdeatails(username);
  };

  return (
    <div className="formSection">
      <h2>Hello, {userdetails}</h2>

      <div>
        <form onSubmit={update}>
          <input
            className="inputdiv"
            type="text"
            placeholder="input ur text"
            onChange={getUserName}
          />
          <br />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormExample;
