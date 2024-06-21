//this is dom manuplation

const a = document.getElementById("company");

//innner text will modif the text in the html document
a.innerText = "I am Sai";

// or you can also you the text Content method too
a.textContent = "I am not sai";
//----------------

const b = document.getElementById("company1");
//inner html will add it h1 tags in the html code
b.innerHTML = "<h1>Hello I am sai too</h2>";

//get element by its tag name
//tag include para p tag, heading  tag
// for index 1 change first p tag and not the rest
const tagTest = document.getElementsByTagName("p")[1];
tagTest.textContent = "Hello I am sai";
console.log(tagTest);
g