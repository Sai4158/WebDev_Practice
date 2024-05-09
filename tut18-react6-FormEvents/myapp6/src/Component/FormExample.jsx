import React from "react";
import { useState } from "react";

const FormExample = () => {
  const [username, setUsername] = useState("");

  //will update it in username using the useState
  const getUserName = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="formSection">
      <h2>{username}</h2>
      <div>
        <input
          className="inputdiv"
          type="text"
          placeholder="input ur text"
          onChange={getUserName}
        />
        <br />
        <button className="submit" type="submit" onClick={}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormExample;
