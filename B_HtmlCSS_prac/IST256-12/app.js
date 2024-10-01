function calculateArea(length, width) {
  let area = length * width;
  return area;
}

// Display the result in the paragraph with id 'result'
document.getElementById("result").textContent = calculateArea(10, 5);
