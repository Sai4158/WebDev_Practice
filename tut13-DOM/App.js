//sort array
let School = ["MSU", "NYU", "PSU"];

School.sort();
console.table(School);

//new line
console.log("");

//object and method
let engine = {
  bmw: 1,
  audi: 2,
  benz() {
    return this.bmw + this.audi;
  },
};
console.log(engine.benz());

//new line
console.log("");

//Object and Method
let animal = {
  animal1: "tiger",
  animal2: "lion",
  animal3: "dog",
  animal4: "cat",

  Set1() {
    return this.animal1 + this.animal2;
  },

  Set2() {
    return this.animal2 + this.animal3;
  },
};

console.log(animal.Set1());
console.log(animal.Set2());

//new line
console.log("");

//class and constructor
class hello {
  constructor(amg, Msport) {
    this.amg = amg;
    this.Msport = Msport;
  }

  PRINT() {
    return `I like ${this.amg} and ${this.Msport}`;
  }
}
const carSet = new hello("AMG_63", "M5");
console.log(carSet.PRINT());


//new line
console.log("");


//Class and constructor -2 
class rangerover{
    constructor(LWB, SWB){
        this.LWB = LWB;
        this.SWB = SWB;
    }
    buyer(){
        return `This LWB means ${this.LWB} and SWB means ${this.LWB}.`
    }
}
const dealer = new rangerover("Long Wheel Base","Short Wheel Base");
console.log(dealer.buyer());