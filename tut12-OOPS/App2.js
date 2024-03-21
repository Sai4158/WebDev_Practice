class Car {
  constructor(bmw, audi) {
    this.bmw = bmw;
    this.audi = audi;
  }

  Brand1() {
    console.log(`this car is ${this.bmw}`);
  }
}

//add the values first
const Car1 = new Car("M5");
const Car2 = new Car("RS7");

//then print
Car1.Brand1();
Car2.Brand1();
