// this is how you can remvoe a duplicate obeckt in array

const cars1 = ["Audi", "Benz", "BMW", "VW"];

// add same "VW" from the array cars1
const cars2 = ["tata", "maruti", "skoda", "VW", "BMW"];

// this is a function that will remove the duplicates
// this will take cars1 and cars2

function removeDUP(cars1, cars2) {
  // merging both arrays using the spread operator
  const merge = [...cars1, ...cars2];

  //   using ... new Set will remove the duplicate objects in the array
  const nodupe = [...new Set(merge)];

  //   make sure to return for the output
  return nodupe;
}

// then put the 2 arrays in the function to test it
console.log(removeDUP(cars1, cars2));

// output
// [
//     'Audi',  'Benz',
//     'BMW',   'VW',
//     'tata',  'maruti',
//     'skoda'
//   ]

// to remove duplicates in a array
//you need to make a function and then put the 2 arrays in the funtion
// then you need make const then merge the 2 arrays using the spread operator
// use that const the make new const then use ...new Set() to remove the duplicates
// then return the function

// then console log the function

// printing random values
const random1 = Math.random() * 5;
console.log(random1);
