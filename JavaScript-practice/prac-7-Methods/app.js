//methods in js

let sports = [" cricket", " baseball", " basketball", " pickleball", " gym"];

//push will show in the last
sports.push("tennis");

document.write(sports + "<br>");

//this will show the lenght of the array
document.write(sports.length);

//pop - will remove last elment from the array
document.write("<br>");
sports.pop();
document.write(sports);

//shift will remove the first array element
document.write("<br>");
sports.shift();
document.write(sports);

//unshift will add a element in the array first
document.write("<br>");
sports.unshift("cars");
document.write(sports);
