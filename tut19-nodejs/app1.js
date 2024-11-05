const fs = require("fs");

fs.writeFile("newfile.txt", "Hello, world!", (err) => {
  if (err) throw err;
  console.log("File created and data inserted!");
});
