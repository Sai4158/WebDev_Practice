//get request in express
const express = require("express");
const app = express();

//this is page1
app.get("/", (req, res) => {
  res.send("Hello this is page one");
});

//this is page2
app.get("/about", (req, res) => {
  res.send("this is page two");
});

const port = 3100;
app.listen(3100, () => {
  console.log(`port is running at ${port}`);
});



