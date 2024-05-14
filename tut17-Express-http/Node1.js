//this is made using the node js

const http = require("http");
const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("I like food");
});

const port11 = 3000;
app.listen(port11, () => {
  console.log(`port is running at ${[port11]}`);
});
