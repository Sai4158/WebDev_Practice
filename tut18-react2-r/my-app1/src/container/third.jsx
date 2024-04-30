import React from "react";

//this is how you destructuring props in react

const Third = (props) => {
  const { model, make, year } = props.car;

  return (
    <div>
      <div>{model}</div>
      <div>{make}</div>
      <div>{year}</div>
    </div>
  );
};

export default Third;
