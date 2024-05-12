import React from "react";

let sample = ["apple", "mango", 35, { username: "Sai" }];

const SampleArray = () => {
  //print the array using the {} and the index you want to print
  return <div>{sample[1]}</div>;
};

export default SampleArray;
