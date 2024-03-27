//when button is clikecked it will alert this
const mybutton = document.getElementById("mybutton");

//event listener wait for then click,
//then it will do whats insdie the function aft6e the click
mybutton.addEventListener("click", function () {
  alert("button is clicked");
});

//Alerts user when CRTL + C is pressed.
const text1 = document.getElementById("text1");
text1.addEventListener("copy", function () {
  alert("CRTL + C IS DECTED");
});
