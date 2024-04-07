const fs = require("fs");
//Reading a file asynchronously
//inlucde the whole folde path
fs.readFile("tut15-Intro-to-nodejs/hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
  }
});

//this is how you create a file and writ it
//it must be require("fs")

const rs = require("fs");

//first where to place the file and then what to write in the file 
rs.writeFile("tut15-Intro-to-nodejs/write1.txt", 'hello my name is sai', (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("done!");
  }
});
