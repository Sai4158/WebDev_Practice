//express server

const experess1 = require("express");

//instace
const app = experess1();

//router handle
app.get("/", (req, res) => {
  res.send("test 2");
});

//port
const port = 3000;
app.listen(port, () => {
  console.log(`running at ${port}`);
});
