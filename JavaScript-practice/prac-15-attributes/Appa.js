// attributes in js
//this will get the id name
const att = document.querySelector("hello").attributes.id;

document.write(att);

//set attribute
const attSet = document.querySelector("hello");
// THIS IS WILL TAKE 2 PARAMETERS, one - what you want chnage
// 2- the property of it
attSet.setAttribute("style", "border: 5px solid black");
