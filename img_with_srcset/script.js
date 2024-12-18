function updateInfo() {
  const viewportWidth = window.innerWidth;
  document.getElementById(
    "viewport-size"
  ).textContent = `Viewport width: ${viewportWidth}px`;

  let currentSize;
  if (viewportWidth <= 600) {
    currentSize = "480px version";
  } else if (viewportWidth <= 1200) {
    currentSize = "800px version";
  } else {
    currentSize = "1200px version";
  }
  document.getElementById(
    "current-image"
  ).textContent = `Currently using: ${currentSize}`;
}

window.addEventListener("load", updateInfo);
window.addEventListener("resize", updateInfo);
