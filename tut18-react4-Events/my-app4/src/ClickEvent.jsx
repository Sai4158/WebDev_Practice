import React from "react";
import { useState } from "react";

const ClickEvent = () => {
  const [number, setNumber] = useState(0);

  //this will increase the number
  const Increment = () => {
    setNumber(number + 1);
  };

  //this will decrease the number
  const Decreament = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const reset = () => {
    setNumber((Number = 0));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decreament}>Decreament</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default ClickEvent;
