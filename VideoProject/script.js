const video = document.getElementById("backgroundVideo");
const toggleButton = document.getElementById("toggleButton");

// Toggle play/pause when the button is clicked
toggleButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    toggleButton.textContent = "Pause"; // Update button text
  } else {
    video.pause();
    toggleButton.textContent = "Play"; // Update button text
  }
});
