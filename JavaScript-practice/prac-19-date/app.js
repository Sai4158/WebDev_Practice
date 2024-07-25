const today = new Date();

// this is will print the time
document.write(today);

document.write("<br>");
document.write("<br>");

//this is will print month
// always add +1 since the index will start at the 0
document.write(today.getMonth() + 1);

document.write("<br>");
document.write("<br>");

// this will print the year
document.write(today.getFullYear());

// this is to set and get the date
document.write("<br>");
document.write("<br>");

const setdate = new Date();
// set a custom date
document.write(setdate.setDate(1));
document.write(setdate);

document.write("<br>");
document.write("<br>");
// setting the year then getting the date
setdate.setFullYear(2222);
document.write(setdate.getFullYear());
