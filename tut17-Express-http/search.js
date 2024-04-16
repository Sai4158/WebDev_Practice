const express = require("express");
const app = express();
const port = 3001;

app.get("/search", (req, res) => {
  const searchTerm = req.query.q;
  res.send("Search Query:" + searchTerm);
});

app.listen(port, () => {
  console.log("Server is running at " + port);
});

// http://localhost:3001/search
//after 3001/search?q=
//what ever u type after q= will be printed in the web
