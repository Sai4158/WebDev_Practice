// Select the heading element by its ID
const heading = document.getElementById("main-heading");

// Select the button element by its ID
const button = document.getElementById("change-heading-btn");

// Select the input field element by its ID
const userInput = document.getElementById("user-input");

// Add an event listener to the button that will run the function when the button is clicked
button.addEventListener("click", function() {
  // Get the value entered by the user in the input field
  const newHeadingText = userInput.value;

  // Check if the input is not empty
  if (newHeadingText.trim() !== "") {
    // Update the heading's text content with the user's input
    heading.textContent = newHeadingText;
  } else {
    // If the input is empty, revert the heading to the default message
    heading.textContent = "Original Heading";
  }
});
