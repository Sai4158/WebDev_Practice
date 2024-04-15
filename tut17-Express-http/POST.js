const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3100;

// Parse incoming JSON requests
app.use(bodyParser.json());

// Handling a POST request for /submit
app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully", data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
