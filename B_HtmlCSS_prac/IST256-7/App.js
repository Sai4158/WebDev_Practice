function ab(name) {
  return name + ", Nice to you meet you!";
}

let a = ab("Sai");

console.log(a);

// -----------------------------------

for (let i = 0; i < a.length; i++) {
  let element = a[i];
  console.log(element.split(" "));
}

// -------------------
