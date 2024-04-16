//handling using a get request with a url

const express = require("express");
const port = 3000;
const app = express();

app.get("/user/:userId", (req, res) => {
  //use req.params
  const userId = req.params.userId;
  res.send(`user id: ${userId}`);
});

// port
app.listen(3000, () => {
  console.log("server is runing at 3000");
});
