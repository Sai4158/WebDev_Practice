// this is how you can remvoe a duplicate obeckt in array

const cars1 = ["Audi", "Benz", "BMW", "VW"];

// add same "VW" from the array cars1
const cars2 = ["tata", "maruti", "skoda", "VW"];

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
