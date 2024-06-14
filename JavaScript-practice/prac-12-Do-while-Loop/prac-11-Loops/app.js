//this is do while loop

let y = 0;

do {
  document.write("I am sai ");
  y++;
} while (y < 20);

//I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai I am sai

// this is a practice for the loops I have learned

var amount = 100;
var days = 60;
var interest = 10;

for (i = 1; i <= days; i++) {
  if (i % 4 === 0) {
    amount += interest;
  }
  document.write("your amount is " + amount + " for " + i + " day " + "<br>");
}

//when you use the spread operator, it will remove using the set operator
//The combination of Set and the spread operator makes for a concise and efficient way to remove duplicates from an array.
var myNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
var myAnswer = [...new Set(myNumbers)];
document.write(myAnswer);
//1,2,3,4,5,6,7,8,9
