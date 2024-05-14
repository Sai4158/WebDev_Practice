//this is made using the express js

const ex = require("express");
const app = ex();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello this is being printed from express");
});

app.get("/about", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log(`port is running at ${port}`);
});
