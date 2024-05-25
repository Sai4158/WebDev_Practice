import React from "react";

/* this is a simple a program using the rest ooperator  */
/* this will add all the aray number and give the output */

function sum(...number) {
  return number.reduce((acc, num) => acc + num, 0);
}

// this wil display in the console
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 5, 6, 7));
console.log(sum(43, 45, 56, 2345, 645));
console.log(sum(234, 4353324, 435, 23, 43));
console.log(sum(768, 456, 768234, 54, 6, 7, 35));
const Rest = () => {
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Rest;
