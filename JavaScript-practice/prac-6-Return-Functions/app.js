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
