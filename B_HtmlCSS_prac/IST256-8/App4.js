let person = {
  // Person's first name
  firstName: "John",
  // Person's last name
  lastName: "Doe",
  // Person's age
  age: 25,

  getFullName: function () {
    // Combine first and last name
    return this.firstName + " " + this.lastName; 
  },

  isAdult: function () {
     // Check if person is 18 or older
    return this.age >= 18;
  },
};

// Print full name
console.log(person.getFullName()); 
 // Check if person is an adult
console.log(person.isAdult());
