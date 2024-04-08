//get nodejs module
const path = require("path");

//create randome file name here instance
//seprated with //
const filepath = "/hello/to/some/file.txt";

//dirname - will get file path but not the name of the file
const dirname = path.dirname(filepath);
console.log("Directory: " + dirname);

//basename - will get the file of the name not the path
const basename = path.basename(filepath);
console.log("File name: " + basename + "\n");

///path-2
const path1 = require("path");
const file1 = "univ/PA/pennstate/UP";

const dir = path1.dirname(file1);
console.log("Directory: " + dir);

const name = path1.basename(file1);
console.log("filename: " + name);
