// Array of numbers
let numbers = [3, 9, 1, 6, 7];

function findMax(arr) {
  // Start with the first element as max
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // Check if current element is bigger

    if (arr[i] > max) {
      // Update max if bigger
      max = arr[i];
    }
  }
  // Return the biggest number
  return max;
}

// Find and print the max number
console.log("Max Number: " + findMax(numbers));

function sortArray(arr) {
  // Sort the array in ascending order
  return arr.sort((a, b) => a - b);
}
// Sort and print the array
console.log("Sorted Array: " + sortArray(numbers));
