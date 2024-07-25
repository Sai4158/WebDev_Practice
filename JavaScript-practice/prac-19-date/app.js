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
