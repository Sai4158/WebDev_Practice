// Attributes in JS
// This will get the id name and print it
const att = document.querySelector("#hello").getAttribute("id");
document.write(att);

// Set attribute
const attSet = document.querySelector("#hello");
// This will take 2 parameters: the attribute to change and the value to set
attSet.setAttribute("style", "border: 5px solid black");

// Remove attribute
const removeAtt = document.querySelector("div");
removeAtt.removeAttribute("ol");
