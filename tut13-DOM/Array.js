let brands1 = ["AUDI", "BENZ", "RangeRover", "VW"];

let brands2 = ["KIA", "LAMBO", "BENTLY", "SKODA"];

//This will add in the front
brands1.unshift("ASTO MARTIN");
console.log(brands1);

//new line
console.log("");

//this remove the first one
brands1.shift("ASTO MARTIN");
console.log(brands1);

//new line
console.log("");

//this will join the both arrays
let plus = brands1.concat(brands2);
console.table(plus);

//new line
console.log("");

//Map
let Number = [1, 2, 3, 4, 5];
let squared = Number.map(function (Number) {
  return Number * Number;
});

console.log(squared);

//new line
console.log("");

//map-2
let sqr = Number.map(function (Number) {
  return Number + Number;
});
console.log(sqr);
//output - [ 2, 4, 6, 8, 10 ]
