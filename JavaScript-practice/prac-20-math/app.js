// this math in js

// math.ceil method
// 11 - anything above the .1 it will assign to next number
const ceil = Math.ceil(10.1);
document.write(" <h1> ", ceil);

document.write("<br>");
// ------------------------

// math.floor -  it will remove the decimal value
const floor = Math.floor(40.6);
document.write(" <h1> ", floor);

document.write("<br>");
// ------------------------

// math round - this will simply round the method
const round = Math.round(443.6);
document.write(" <h1> ", round);

document.write("<br>");
// ------------------------

// math max
const max = Math.max(443, 34, 453, 76, 8435, 234);
document.write(" <h1> ", max);

document.write("<br>");

// ------------------------

// math min
const min = Math.min(443, 34, 453, 76, 8435, 234);
document.write(" <h1> ", min);

document.write("<br>");

// ------------------------

// math random -  this will print  a random value when left a empty array
const random = Math.random();
document.write(" <h1> ", random);

document.write("<br>");

// this math random will print below 5
const random1 = Math.random() * 5;
document.write(" <h1> ", random1);
