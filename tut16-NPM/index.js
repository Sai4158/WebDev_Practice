//using a NPM - greet-by-time

const greet = require("greet-by-time");

const hour = new Date().getHours();
console.log(greet(hour));
