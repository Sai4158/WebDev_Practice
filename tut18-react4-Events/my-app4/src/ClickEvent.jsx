import React from "react";
import { useState } from "react";

const ClickEvent = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {number}
      <div>
        <button>Increment</button>
        <button>Decreament</button>
      </div>
    </div>
  );
};

export default ClickEvent;
