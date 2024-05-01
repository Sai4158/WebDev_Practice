import React from "react";

export const A1 = (props) => {
  const { car, bike, boat } = props.car;
  console.log(props);

  return (
    <div>
      <div>{car}</div>
      <div>{bike}</div>
      <div>{boat}</div>
    </div>
  );
};

export default A1;
