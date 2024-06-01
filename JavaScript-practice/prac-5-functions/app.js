// a simple functions
app = () => {
  document.write("hello I am sai");
};

//then call it
app();
document.write("<br>");

//global scope
//Function scope
//Block function scope

var apple = "red";
let orange = "yellow";
const banana = "green";

//global scope
globalscope = () => {
  document.write("hello I am globalscope");
};
globalscope();
document.write("<br>");

//Function scope
Functionscope = () => {
  var x = 100;
  document.write(x);
};
Functionscope();
document.write("<br>");

//Block function scope
Blockscope = () => {
  if (10 < 50) {
    let cricket = "virat";
    // can only access it from here since its a block scope
    document.write(cricket);
  }
};
Blockscope();
document.write("<br>");
