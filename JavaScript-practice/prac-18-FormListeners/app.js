// form events in js

const mainform = document.getElementById("Myform");

const username = document.getElementById("nameInput");

const inputname11 = document.getElementById("name");

mainform.addEventListener("submit", function (e) {
  e.preventDefault();

  const myusername = username.value;

  inputname11.textContent = myusername;
});
