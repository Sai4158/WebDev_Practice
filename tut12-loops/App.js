//for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
console.log("----");

//for loop -2
for (let a = 0; a < 5; a++) {
  console.log("hello" + a);
}
console.log("----");

//while loop
let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}
console.log("----");

//while loop -2
let baa = 0;
while (baa < 5) {
  console.log("baa is: " + baa);
  baa++;
}
console.log("----");

//do while loop
let x = 0;
do {
  console.log("x is: " + x);
  x++;
} while (x < 5);

console.log("----");

//do while loop-2
let bb = 0;
do {
  console.log(bb);
  bb++;
} while (bb < 5);
console.log("----");

//break statments
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stop the loop when i is 5
  }
  console.log("i is: " + i);
}
console.log("----");

//break statments -2 -  this is stop when it reaches a number
for (g = 0; g < 10; g++) {
  if (g === 7) {
    break;
  }
  console.log("g is: " + g);
}
console.log("----");

//countinous statments -  this is will skip a number
for (dd = 0; dd < 10; dd++) {
  if (dd === 5) {
    continue;
  }
  console.log("dd is: " + dd);
}
console.log("----");
