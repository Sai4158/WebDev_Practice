//let can change after
let name = "Sai Rangine";
name = "hello";
console.log(name);

//string or number data type
const age = 19;
console.log(age);
console.log("this is a type of " + typeof age + " " + age);

//boolean
const gender = true;
console.log(gender);
console.log("this is a type of " + typeof gender + " " + gender);

//undefined data type
let x;
console.log(x);
console.log("this is a type of " + typeof x + " " + x);

//object - creating
let person = {
  name: "Sai",
  age: 19,
};
//print form the block code
console.log(person.name);
//or u can use this one too
console.log(person["age"]);

//arrays
let color = ["red", "blue", "green"];
console.log(color[1]); // will print blue beacause index starts at 0

//functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("sai"));

//functions -2
function hello(agee) {
  return `ur age is ${agee}!`; //use ` (left top right button) not ' (not right side button)
}
console.log(hello("19"));

//function-3
function num(sup) {
  return `hello this is ${sup}!`;
}
console.log(num("Sai")); //("")
//end

//addition
let sum = 2 + 4;
console.log(sum);

//increment
let a = 3;
a++;
console.log(a);

//check if it true (boolean)
console.log(5 == 5);

//checks if it has the same the exact thing no matter the string or int (boolean)
console.log(5 == "5");

//not equal or not (boolean)
console.log(5 != "5");

//STRICTLY ===  ALSO CHECK FOR THE DATA TYPE
console.log(5 === "5");

//GREATER OR LOWER
console.log(5 < 6);
console.log(6 > 1);
console.log(6 >= 6);

//logical
let xe = 5;
let ye = 7 > 6;

console.log(xe == ye);

console.log(!ye);
