// This is Set interval
//  So this program will increse count 1 every sec

let count = 1;

function interTime() {
  // adding +1 to count
  count = count + 1;
  console.log(count);
}

const time = setInterval(interTime, 1000);
