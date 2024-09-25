// Random number between 1 and 100
let gameNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
  guess = prompt("Guess the game number (1-100)");
  if (guess > gameNumber) {
    alert("Too high! Try again.");
  } else if (guess < gameNumber) {
    alert("Too low! Try again.");
  } else {
    alert("Congratulations! You guessed the right number.");
  }
} while (guess != gameNumber);
