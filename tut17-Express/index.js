//import npm package
const express = require("express");

//instance of the Express application
const app = express();

//router handle
//make sure it is req and res then res.send("")
app.get("/", (req, res) => {
  //print
  res.send("Hello, express ");
});

//set the server to listen
const port = 3000;
app.listen(port, () => {
  console.log("Is running at: " + port);
});
