//using a NPM - greet-by-time

const greet = require("greet-by-time");

const hour = new Date().getHours();
const myhour = 20;
console.log(greet(hour));
console.log(greet("Sai", myhour));
