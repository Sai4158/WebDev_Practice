const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello I am Sai ");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
