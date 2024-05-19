import React from "react";
import { useState } from "react";
const Usestate = () => {
  const [number, setNumber] = useState("one");
  setNumber("two");
  console.log(number);
  return <div>number</div>;
};

export default Usestate;
