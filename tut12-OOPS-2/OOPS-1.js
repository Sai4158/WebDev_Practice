//objects in OOPS

let person = {
  //key value pairs, use,
  firstName: "Sai",
  lastName: "Ran",
  age: 21213,
};

//. notation
console.table(person);
// braket notation
console.log(person["age"]);

//add and print
person.gender = "Male";
console.log(person.gender);

//modify age after
person.age = 20;
console.log(person.age);

//delete
delete person.age;
console.log(person.age + "   ///age has been deleted");
