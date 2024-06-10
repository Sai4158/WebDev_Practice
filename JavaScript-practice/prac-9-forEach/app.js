let mycarsss = ["range", "rover", "bmw", "skoda", "vw", "lambo", "m5"];
let score = [4, 34, 34, 5, 45, 345];

//a function called inside a paramenter inside a function is called a call back function
mycarsss.forEach(function (item, index) {
  document.write(index + ". " + item + " <br>");
});

//this will print mycarss value
// range
// rover
// bmw
// skoda
// vw
// lambo
// m5
// -------------------------
document.write("<br>");

score.forEach(function (apple) {
  document.write(apple + 5 + " <br>");
});
//9
// 39
// 39
// 10
// 50
// 350

// ---------------------
document.write("<br>");
document.write("<br>");

let mycat = [1, 2, 3, 4, 5, 56, 6, 6, 7, 78];
let mydog = [4.3, 6, 45, 6, 45, 566.6];

let both = mycat.concat(mydog);

document.write(both);

//call back funtion
document.write("<br>");

both.forEach(function (item) {
  document.write(item - 5);
});
