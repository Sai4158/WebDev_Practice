//function expression
//just a assigning a name to a function
var a = function apple() {
  document.write("function expression");
};

a();

document.write("<br>");

// anonymous function
// a functions without a name is called anonymous function
var b = function () {
  document.write("nonymous function");
};
b();

document.write("<br>");

// Function with parameters and return value
function score(a, b) {
  return a + b;
}
document.write(score(3, 4));

//practice

//practice -  functions with parameters
function game(x, y) {
  return document.write("mouse x is at " + x + " ,mouse y is at " + y);
}
game("125", "200");

document.write("<br>");

//will promt and ask name, will print hello and the name
var name = prompt("enter your name here please");

function guest(currentName) {
  return document.write("Hello " + currentName);
}

guest(name);
