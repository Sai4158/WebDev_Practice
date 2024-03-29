//using the id
const hover = document.getElementById("hover");

//function names and what it will do
function colorChangeOnHover() {
  hover.style.backgroundColor = "lightblue";
}
function restoreColorOnExit() {
  hover.style.backgroundColor = "red";
}

//will call the function when this event happens
hover.addEventListener("mouseenter", colorChangeOnHover);
hover.addEventListener("mouseleave", restoreColorOnExit);
