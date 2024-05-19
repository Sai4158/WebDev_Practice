import React, { useState } from "react";

const SecondButton = () => {
  // use state
  const [state, setState] = useState("");

  const change = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="type here too" onChange={change} />
        <button type="submit">Click here</button>
      </div>
    </div>
  );
};

export default SecondButton;
