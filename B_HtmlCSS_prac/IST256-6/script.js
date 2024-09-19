function toggleImageVisibility() {
  const image = document.getElementById("image");
  image.classList.toggle("visible-image");
}

function switchBackgroundColor() {
  const container = document.getElementById("pictureContainer");
  const currentColor = container.style.backgroundColor;

  container.style.backgroundColor =
    currentColor === "lightgreen" ? "#f8f8f8" : "lightgreen";
}

window.onload = function () {
  setTimeout(function () {
    const image = document.getElementById("image");
    image.classList.add("visible-image");
  }, 5000);
};
