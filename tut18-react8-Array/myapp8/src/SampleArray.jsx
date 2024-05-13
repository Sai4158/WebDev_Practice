import React from "react";

let fruits = ["apple", "mango", 35, { username: "Sai" }];

let players = [
  {
    cricket: "dhoni",
    tennis: "sania",
    chess: "anand",
    hockey: "Dyan Chand",
  },
];
const SampleArray = () => {
  //print the array using the {} and the index you want to print
  return (
    <div>
      {fruits[1]}
      <br />

      {/*print by using index*/}
      {players[0].cricket}

      {players.map((item) => {
        return <div>{item.hockey}</div>;
      })}

      {players.map((item1) => {
        return <div>{item1.chess}</div>;
      })}

      {/*this how you do it by the index  */}
      {players[0].tennis}

      {players.map((item2) => {
        return <div>{item2.chess}</div>;
      })}
    </div>
  );
};

export default SampleArray;
