const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, I am sai");
});

app.get("/", (req, res) => {
  res.send("Hello this is page one");
});

app.get("/about", (req, res) => {
  res.send("this is page two");
});

app.listen(port, () => {
  console.log(`this is runnning at ${port}`);
});
