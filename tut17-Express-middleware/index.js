const express = require("express");
const app = express();
const port = 3400;

app.use((req, res, next) => {
  console.log("one done");

  req.customProm = "hello";

  //next = will pass the control to the next middleware
  next();
});

app.use((req, res, next) => {
  console.log("two done");
  console.log(req.customProm);
});

app.get("/hello", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log("port is running on " + port);
});
