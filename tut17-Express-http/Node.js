const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Hello, this is being printed from Node.js!");
  } else if (req.url === "/about") {
    res.end("Hello from the about page!");
  } else {
    res.end("Page not found");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
