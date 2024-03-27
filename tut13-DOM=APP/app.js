const counter = document.getElementById("counter");

const Ibutton = document.getElementById("Ibutton");

//set the count value to 0
let count = 0;

Ibutton.addEventListener("click", function () {
  //update when clicked
  count++;
  //updates the code
  counter.textContent = count;
});

const Dbutton = document.getElementById("Dbutton");

Dbutton.addEventListener("click", function () {
  count--;
  counter.textContent = count;
});
