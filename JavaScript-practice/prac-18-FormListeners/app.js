const body = document.getElementsByTagName("body")[0];

const mainform = document.getElementById("Myform");

const username = document.getElementById("nameInput");

const inputname11 = document.getElementById("name");

mainform.addEventListener("submit", function (e) {
  e.preventDefault();

  const myusername = username.value;

  inputname11.textContent = myusername;

  // this is for the reset
  mainform.reset();
});

// this is when the input button is clicked it will be in different color
username.addEventListener("focus", function (e) {
  e.target.style.background = "pink";
});

// this will be transparent when clicked
username.addEventListener("blur", function (e) {
  e.target.style.background = "";
});

// change background to green when submit button is clicked
mainform
  .querySelector("button[type='submit']")
  .addEventListener("click", function (e) {
    body.style.background = "green";
    body.style.fontSize = 20;
  });
