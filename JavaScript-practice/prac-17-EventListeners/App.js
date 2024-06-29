//event listeners in js

const darkTheme = function () {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".dark-theme").textContent = "Light Theme";
  document.querySelector("header").style.backgroundColor = "#2E282A";
  document.querySelector(".sidenav").style.backgroundColor = "#808A9F";
};

const lightTheme = function () {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".dark-theme").textContent = "Dark Theme";
  document.querySelector("header").style.backgroundColor = "#F86624";
  document.querySelector(".sidenav").style.backgroundColor = "#1768AC";
};

function eleHover(element) {
  element.style.backgroundColor = "yellow";
}

function eleOut(item) {
  item.style.backgroundColor = "#DEE7E7";
}

const changeCompany = function () {
  document.querySelector("#company").textContent = "Sales Force";
};

const normal = function () {
  document.querySelector("#company").textContent = "Company";
};

const keyPressed = function () {
  document.querySelector("body").style.backgroundColor = "white";
};

const keyDown = function () {
  document.querySelector("body").style.backgroundColor = "red";
};

loginbtn.onclick = showLogin;

function showLogin() {
  sideNavBar.style.display = "None";
  <div>
    <h2>Hello I am Sai</h2>
  </div>;
}

document
  .getElementById("loginbtn")
  .addEventListener("mouseover", addEventListener, function () {
    this.style.background = "green";
  });

const target = document.getElementById("target");
const addEventButton = document.getElementById("addEvent");
const removeEventButton = document.getElementById("removeEvent");

function handleMouseOver() {
  alert("Mouse over detected!");
}

// Add the mouseover event listener
addEventButton.addEventListener("click", function () {
  target.addEventListener("mouseover", handleMouseOver);
  alert("Mouseover event added ");
});

removeEventButton.addEventListener("click", function () {
  target.removeEventListener("mouseover", handleMouseOver);
  alert("Mouseover event removed");
});
