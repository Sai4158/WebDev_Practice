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
document.write("<br>");
document.write("<br>");

document.write("this will combine both arrays and then print it ");

//concat method
let score = [11, 3, 435, 6, 345];
let player = ["amir", "shart", "ewf", "hufffes", "sai"];

let newPlayers = score.concat(player);
document.write(newPlayers);

// join method - will make a new element
document.write("<br>");
document.write("<br>");

let team = [5, 23, 4, 34, "abhi", "suhfdw", "sai"];

//what ever you put in the join will be seprated by that
let newTeam = team.join("/");
// 5/23/4/34/abhi/suhfdw/sai

document.write(newTeam);

//SLICE METHOD - returns a shallow copy of a portion of an array into a new array
document.write("<br>");
document.write("<br>");

let students1 = ["anil", "balu", "karthik", 10, 20, 30, 40];
document.write(students1);

//using slice to print
//slice - will print those index values
document.write("<br>");
let mystudents = students1.slice(0, 4);
document.write(mystudents);

//Splice method in js
//splice will remove those values
document.write("<br>");
document.write("<br>");

let cars = ["audi", "benz", "range rover", "bmw"];
document.write(cars);

document.write("<br>");

//will print these index's only from 0 to 3 and will remove anything else
//but if you put anythig it will replace it
cars.splice(0, 3, "hello");
document.write(cars);
document.write("<br>");

//can you also replace like this
// at index 3 only reaplce 1 with "I love cars"
//if I put 2 instead of 1 it will remove next 2 values sINCE i want to replace it I put 1 there
cars.splice(3, 1, "I love cars");

document.write(cars);
document.write("<br>");

// this wont remove anything but add the value next to it

cars.splice(2, 0, "I like bmw");

document.write(cars);

///prac
document.write("<br>");
document.write("<br>");

//splice practice
let mycarsss = ["range", "rover", "bmw", "skoda", "vw", "lambo", "m5"];
let mypref = mycarsss.splice(2, 0, "I like beammer");

//if you print the orginal array it will show all
document.write(mycarsss);
document.write("<br>");

//if you print the splice array it will show the removed stuff
document.write(mypref);

//so slice will remove

//splice will remove or reaplce
//0,2 -  will remove
// 2,1, "i like cars" -  at index 2 it will remove once and replace with the text
document.write("<br>");
document.write("<br>");
let mryr = mycarsss.splice(1);
//if you print the splice array it will show the removed stuff
document.write("<br>");
document.write("<br>");

document.write(mryr);
