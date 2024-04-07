//read

const file = require("fs");
//must put "utf8"
file.readFile("tut15-Intro-to-nodejs/test1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

//write
const rd = require("fs");
rd.writeFile("tut15-Intro-to-nodejs/cars2.txt", "I like cars", (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("done!");
  }
});
