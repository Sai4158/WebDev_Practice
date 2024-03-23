let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// Calling the add method
console.log(calculator.add(23, 23));

// Calling the subtract method
console.log(calculator.subtract(5, 5));

// Calling the multiply method
console.log(calculator.multiply(5, 5));

//method 2

let car = {
  bmw(a, b) {
    return a + b;
  },
  audi(a, b) {
    return a + b;
  },

  benz(a, b) {
    return a + b;
  },
};

console.log("");
console.log("carsss");
console.log(car.audi(20, 30));
console.log(car.bmw(1, 4));
console.log(car.benz(34, 35));

//method03

let card = {
  card1() {
    return "HellO I am Card 1";
  },
  card2() {
    return "card 2";
  },
  card3() {
    return "card 3";
  },
};
console.log("");
console.log(card.card1());
console.log(card.card2());
console.log(card.card3());

console.log("");

//Object and Methods:
let circle = {
  radius: 5,
  area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area());

console.log("");

//Object and Methods -2
let tri = {
  rai: 5,
  are() {
    return Math.PI + this.rai;
  },
};

console.log(tri.are());

console.log("");

//Object and Methods -3

//object
let cat = {
  food: 1,
  water: 2,
  //method inside a functions
  dog() {
    return this.food + this.water;
  },
};
console.log(cat.dog());

//this will print the date
const d = new Date();
console.log(d);
console.log("");

//Object Constructors

//class
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  name() {
    return `hello my name is ${this.firstname} and lastname is ${this.lastname}`;
  }
}
const sai = new Person("Sai", "Ran");
console.log(sai.name());
