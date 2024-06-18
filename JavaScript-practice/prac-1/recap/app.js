//for each -  Will gover each number and it takes a funtion
let num = [, 4, 5, 6, 45, 6];

num.forEach((number) => {
  document.write(number * 2 + " ");
});
//8 10 12 90 12

document.write("<br>");

//map creates a new array
//it doesnt affect the orginal array, also printed the orginal array
num.map((numm) => {
  document.write(numm + 2 + " ");
});
// 6 7 8 47 8

document.write("<br>" + num);
// ,4,5,6,45,6
