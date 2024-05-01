import React from "react";
import { useState } from "react";
const Use = () => {
  const [number, setNumber] = useState("one");
  setNumber("two");
  console.log(number);

  const [car, setCar] = useState("audi");
  setCar("BMW");
  console.log(car);
  return <div>number</div>;

  
};

export default Use;
