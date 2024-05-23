import React from "react";
import { useData } from "./Context/Example";

const Dh = ({ name }) => {
  const { surprize } = useData();
  return (
    <div>
      <h1>Hellp my name is {surprize}</h1>
    </div>
  );
};

export default Dh;
