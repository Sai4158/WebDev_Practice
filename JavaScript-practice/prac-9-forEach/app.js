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
