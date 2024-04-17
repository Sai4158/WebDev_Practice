const express = require("express");
const app = express();
const port = 3000;

app.get("/redirect", (req, res) => {
  //redirect is key word
  //it will redirect to this page
  res.redirect("https://www.tesla.com");
});

// Setting a custom status code
app.get("/notfound", (req, res) => {
  res.status(404).send("not found");
});

app.listen(port, () => {
  console.log("is running at" + port);
});
