import React, { useState } from "react";

const Test = () => {
  // use state
  const [state, setState] = useState("");

  const change = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="formSection">
      <div>
        <h2>{state}</h2>
        <input
          className="inputdiv"
          type="text"
          placeholder="type here too"
          onChange={change}
        />
        <button type="submit">Click here</button>
      </div>
    </div>
  );
};

export default Test;
