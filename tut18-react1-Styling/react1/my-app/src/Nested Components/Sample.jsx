//rfce = will import the

import React from "react";
import Testcom from "./Testcom";

//this are nested components
const Mango = () => {
  return <h2>Mangoes are sweet</h2>;
};

const Grapes = () => {
  return <h2>grapes are nice</h2>;
};

function Sample() {
  return (
    <div>
      <Mango />
      <Grapes />
      <Testcom />
    </div>
  );
}

export default Sample;


