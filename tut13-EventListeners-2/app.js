//when ever there is a key it log

//KEYDOWN = will check when key is pressed
document.addEventListener("keydown", function (event) {
  //event.key = will log the key that was present
  console.log(event.key);
  //in this div
  const pressed = event.key;
  const key = document.getElementById("keyword");
  //create new para
  const newElement = document.createElement("p");
  newElement.textContent = `you pressed the key ${pressed}`;

  //print
  key.appendChild(newElement);
});

//end
//will log when the mouse is pressed
document.addEventListener("mousedown", function (event) {
  console.log(event.key);

  const mou = document.getElementById("key");
  const click = event.mou;

  const newClick = document.createElement("p");
  newClick.textContent = "clicked" + click;
  mou.appendChild(newClick);

  //this log x when the mouse is clicked
  console.log("Event type:" + event.clientX);
});
//button
const button = document.getElementById("mybutton");

function button1(event) {
  console.log("button clicked");
}
//when button is clicked it will button1 function
button.addEventListener("click", button1);

//button -2
const button0 = document.getElementById("mybutton2");
function button11(event) {
  console.log("button is clicked");
}
button0.addEventListener("click", button11);
