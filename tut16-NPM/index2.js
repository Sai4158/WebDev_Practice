//npm init
//the npm package install

// Importing the necessary functions
const { format, parseISO } = require("date-fns");

// Parsing a date string
const parsedDate = parseISO("2024-11-11T12:30:00");

// Formatting the parsed date
const formattedDate = format(parsedDate, "yyyy-MM-dd HH:mm:ss");
console.log(formattedDate + "\n");

//new
//adding and subtracting time
const { addDays, subMonths } = require("date-fns");

const currentDate = new Date();
console.log("currentDate: " + currentDate);

// Adding 5 days to the current date
const futureDate = addDays(currentDate, 5);

// Subtracting 2 months from the current date
const pastDate = subMonths(currentDate, 2);

console.log("Future Date:", futureDate);
console.log("Past Date:", pastDate + "\n");

//Difference between Dates
const { differenceInDays, differenceInHours } = require("date-fns");

const startDate = new Date("2024-11-01");
const endDate = new Date("2024-11-11T12:30:00");

// Difference in days between two dates
const daysDifference = differenceInDays(endDate, startDate);

// Difference in hours between two dates
const hoursDifference = differenceInHours(endDate, startDate);

console.log("Days Difference:", daysDifference);
console.log("Hours Difference:", hoursDifference);
