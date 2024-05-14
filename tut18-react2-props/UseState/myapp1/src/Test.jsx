import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  //use state
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  //use effects

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    </div>
  );
};

export default Test;
