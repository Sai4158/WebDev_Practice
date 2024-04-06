const fs = require("fs");

//Reading a file asynchronously
//inlucde the whole folde path
fs.readFile(`tut15-Intro-to-nodejs/hello.txt`, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
