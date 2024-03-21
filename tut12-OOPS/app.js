class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    // use ' ' and $ to refer to that

    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
// add name and age here
const Person1 = new Person("xaa", 19);
const Person2 = new Person("xzw", 32);

//print it out
Person1.greet();
Person2.greet();
