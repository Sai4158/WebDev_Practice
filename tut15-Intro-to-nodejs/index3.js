//this how to read from a file

const fs = require("fs");

fs.writeFile(
  "tut15-Intro-to-nodejs/index3.txt",
  "i like foods",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("Done ");
    }
  }
);
