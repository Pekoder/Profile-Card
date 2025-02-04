const currentTimeElement = document.getElementById("currentTimeUTC");
function updateDisplay() {
  const currentTime = new Date().toUTCString();
  currentTimeElement.textContent = currentTime;
}
window.addEventListener("load", updateDisplay);
