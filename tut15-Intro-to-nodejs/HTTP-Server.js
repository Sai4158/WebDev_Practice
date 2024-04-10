//Module (HTTP Server)

//to run a server we need https
const http = require("http");

//create new const then pass https
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!, I am Sai");
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//this is how you u create a node js server -2
const gt = require("http");
const srr = gt.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("I like to drive cars");
});
const port1 = 3500;
srr.listen(port1, () => {
  console.log(`server running at http://localhost:${port1}/`);
});

//
//node js port-2
const https2 = require("http");
const server2 = https2.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("I like coding");
});
const port12 = 3400;
server2.listen(port12, () => {
  console.log(`Server is running at http://localhost:${port12}/`);
});
