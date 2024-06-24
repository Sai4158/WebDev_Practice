// using the querey selector to get instead of using get by element id

// this is using the id in html
const abc = document.querySelector("#hello");

abc.textContent = "Amazon";

//so this will print and li tags here 
//this is using the query Selector all
const list = document.querySelectorAll("li");
document.write(list);
