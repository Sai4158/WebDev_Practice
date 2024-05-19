import React from "react";

const Test = () => {
  const a = [{ a: "1", b: "2", c: "3" }];
  const b = [{ a: "4", b: "5", c: "6" }];
  const c = [{ a: "7", b: "8", c: "9" }];

  console.log(...a, ...b, ...c);
  return <div>{}</div>;
};

export default Test;
