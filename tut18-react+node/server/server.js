// this where backend api will be

const express = require("express");
const app = express();

app.get("/api", (res, req) => {
  res.json({ users: ["Sai", "Abhi", "pranav"] });
});

// make sure this is runing in the diffrent port but not the same as the react
app.listen(5000, () => {
  console.log("Server stared on the port 5000");
});
