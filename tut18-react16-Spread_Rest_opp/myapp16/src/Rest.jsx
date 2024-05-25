import React from "react";

/* this is a simple a program using the rest ooperator  */
/* this will add all the aray number and give the output */

function sum(...number) {
  return number.reduce((acc, num) => acc + num, 0);
}

const Rest = () => {
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Rest;
