//This will print the current time

const { addDays, subMonths } = require("date-fns");

const currentDate = new Date();
console.log("currentDate: " + currentDate);

//this how u add 5 days to the current date
const futureDate = addDays(currentDate, 5);

console.log("Date after 5 days from now:", futureDate);
