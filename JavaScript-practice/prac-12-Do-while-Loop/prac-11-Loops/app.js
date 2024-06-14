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
