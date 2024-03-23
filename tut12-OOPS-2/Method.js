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
