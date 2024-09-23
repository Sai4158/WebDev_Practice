// Set number to 7
let number = 7;

if (number > 0) {
  // Check if number is positive
  console.log("Positive Number");
} else if (number < 0) {
  // Check if number is negative
  console.log("Negative Number");
} else {
  // If number is 0
  console.log("Zero");
}

for (let i = 2; i < number; i++) {
  // Check if number is divisible by i, Strictly
  if (number % i === 0) {
    // If divisible, not prime
    isPrime = false;
    break;
  }
}

// Print if the number is prime or not
console.log(isPrime ? "Prime" : "Not Prime");
