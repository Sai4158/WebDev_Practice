// index off  - will get the index of the element in the array

let student = ["anul ", "3refs ", "Fewf ", "ewfwf "];
document.write("<br>");

document.write(student);
document.write("<br>");
document.write(student.indexOf("anul "));
document.write(student.indexOf("Fewf "));
document.write(student.indexOf("3refs "));

//this is how you push index if it is -1
document.write("<br>");
var newstudents = student.indexOf("satish");

if (newstudents === -1) {
  student.push("satish");
}
document.write(student);
//anul ,3refs ,Fewf ,ewfwf ,satish