const { response } = require("express");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-text": "text/html" });
    res.write("<h1>Hello, Node.js</h1>");
    res.end();
  })
  .listen(3000);
