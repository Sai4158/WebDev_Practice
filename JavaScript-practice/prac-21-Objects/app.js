const aaa = ["43", "34", "324"];
// printing the Index 1 in the array
// for the array u fetch using the Index
console.log(aaa[1]);

// making a object
// for ovjects you fetch using the KEY
const captial = {
  India: "Contry",
  Hyderbad: "State",
  //   for the location this will run the
  Location: function () {
    return "I live in " + this.Hyderbad;
  },
};

console.log(captial.India);
// make sure to use () to call the function here
console.log(captial.Location());
