//Change a classname //inlcude id name here
const element = document.getElementById("sai");
element.classList.add("ias");
element.classList.remove("sai");

//Changing a class name -2
const heading4 = document.getElementById("h4");
heading4.classList.remove("h4");
heading4.classList.add("head4");

//button by creating new class
//create element
const newElement = document.createElement("button");
newElement.textContent = "click me";
const button = document.getElementById("button");
button.appendChild(newElement);

//create a new button and add it
//create here
const newElement1 = document.createElement("button");
//Text on the button
newElement1.textContent = "CLICKKK";
//Id here
const button1 = document.getElementById("button1");
button1.appendChild(newElement1);
