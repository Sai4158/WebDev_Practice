// using the querey selector to get instead of using get by element id

// this is using the id in html
const abc = document.querySelector("#hello");

abc.textContent = "Amazon";

//so this will print and li tags here
//this is using the query Selector all
const list = document.querySelectorAll("li");
document.write(list);

//using for loop to change all the text at once
for (let x = 0; x < list.length; x++) {
  list[x].textContent = "I LOVE CODING";
}
