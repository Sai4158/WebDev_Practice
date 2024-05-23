import React from "react";
import Dh from "./Dh";
import { useData } from "./Context/Example";

const Ch = ({ name }) => {
  const { surprize } = useData();
  return (
    <div>
      <h2>my name is {surprize}</h2>
      <Dh name={name} />
    </div>
  );
};

export default Ch;
