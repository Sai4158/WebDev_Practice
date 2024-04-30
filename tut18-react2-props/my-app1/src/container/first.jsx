import React from "react";

const First = (props) => {
  const { model, make, year } = props.car;

  return (
    <div>
      <div>{model}</div>
      <div>{make}</div>
      <div>{year}</div>
    </div>
  );
};

export default First;
