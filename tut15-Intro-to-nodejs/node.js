//for port
const http = require("http");
//for file reader
const fs = require("fs");

//create server
const server = http.createServer((req, res) => {

    //read file in node js
  fs.readFile("node.js", (err, data) => {
    if (err) {
      //sending a 404 status code
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("File not found");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(data);
      res.end();
    }
  });
});

const port = 3400;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
