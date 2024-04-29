import React from "react";

const First = (props) => {
  console.log(props);
  return <div>{props.name}</div>;
};

export default First;
