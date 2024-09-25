let score = prompt("Enter your score");

if (score >= 90 && score <= 100) {
  alert("Grade: A");
} else if (score >= 70 && score <= 89) {
  alert("Grade: B");
} else if (score >= 60 && score <= 69) {
  alert("Grade: C");
} else if (score >= 50 && score <= 59) {
  alert("Grade: D");
} else if (score >= 0 && score < 50) {
  alert("Grade: F");
} else {
  alert("Invalid score");
}
