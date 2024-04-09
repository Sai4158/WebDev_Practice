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
console.log("filename: " + name + "\n");

//will join this
//dir = curret dir above
//__dirname = will get the current file path from vs code
const fullPath = path1.join(__dirname, "files", "example.txt", "final");
console.log("Full Path:", fullPath);

//path-3
const path3 = require("path");
const filepath2 = "abc/hello/floder";

const dir2 = path3.dirname(filepath2);
console.log("full path: " + dir2 + "\n");

const base1 = path3.basename(filepath2);
console.log("File name: " + base1 + "\n");

//join
const join1 = path.join(__dirname, "helleo", "bye");
console.log(join1 + "\n");

//path 4
const path4 = require("path");
const file4 = "hello/hi/hey";

const dir4 = path4.dirname(file4);
console.log("path: " + dir4);

const base4 = path4.basename(file4);
console.log("File: " + base4);
