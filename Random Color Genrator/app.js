const button = document.getElementById("colorbutton");

button.addEventListener("click", function () {
  // Generate two sets of random colors
  const randomRed1 = Math.floor(Math.random() * 256);
  const randomGreen1 = Math.floor(Math.random() * 256);
  const randomBlue1 = Math.floor(Math.random() * 256);

  const randomRed2 = Math.floor(Math.random() * 256);
  const randomGreen2 = Math.floor(Math.random() * 256);
  const randomBlue2 = Math.floor(Math.random() * 256);

  // Create a linear gradient at 45 degrees with the two colors
  document.body.style.backgroundImage = `linear-gradient(45deg, rgb(${randomRed1}, ${randomGreen1}, ${randomBlue1}), rgb(${randomRed2}, ${randomGreen2}, ${randomBlue2}))`;
  button.style.backgroundImage = `linear-gradient(45deg, rgb(${randomRed1}, ${randomGreen1}, ${randomBlue1}), rgb(${randomRed2}, ${randomGreen2}, ${randomBlue2}))`;
  // Log the gradient
  console.log(
    `linear-gradient(45deg, rgb(${randomRed1}, ${randomGreen1}, ${randomBlue1}), rgb(${randomRed2}, ${randomGreen2}, ${randomBlue2}))`
  );
});
