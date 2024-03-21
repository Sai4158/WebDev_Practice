// this will add it in the end
let x = ["dfs", "ewfc", "ewf"];
x.push("ewf213c");
console.log(x);

//.concact = will add 2 arrays together
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "broccoli"];

//combine two of them
let combined = fruits.concat(vegetables);

//print
console.log(combined);

//slice array = will print only inbetween those but not the last one
//will print 2 and 3 but not the 4th one
let subArray = combined.slice(2, 4);
console.log(subArray);

//Splice  = after index 2 and will remove 2 arrays and then inserts “”
combined.splice(2, 2, "grape", "kiwi");
console.log(combined);

//indexof =  will tell which index the word is in (like…4)

let index = combined.indexOf("grape");
console.log(index); // will return 2

//filter = will show item greater in lenght than 2
let filtered = combined.filter((item) => item.length > 2);
console.log(filtered);

//for each =  this will x2 every number in the array
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 2);
});

//map method = this multiplly every number
let numbers2 = [1, 2, 3, 4, 5];
let squared = numbers2.map(function (numbers2) {
  return numbers2 * numbers2;
});
console.log(squared);

//find method = will find if each are divisble by the same number
let even = numbers.find(function (number) {
  return number % 2 === 0;
});
console.log(even);

// Sort =  will sort everything in order
let fruits33 = ["banana", "cherry", "apple", "date"];
fruits33.sort();
console.log(fruits33);

//end