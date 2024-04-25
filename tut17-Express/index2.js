const express = require("express");

const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.send("Hello I am Sai ");
});

app.get("/1", (req, res) => {
  res.send("this is the profile");
});

app.listen(port, () => {
  console.log(`port is running at ${port}`);
});
