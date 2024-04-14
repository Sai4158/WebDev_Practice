const fr = require("fs");

fr.readFile("tut15-Intro-to-nodejs/index3.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
