let person = {
  Name: "Sai",
  age: "324",
  score: "100",
};

console.log(person);
// { Name: 'Sai', age: '324', score: '100' }

console.log(person.Name);
// Sai

let a = JSON.parse(person.score);
console.log(a);
// 100