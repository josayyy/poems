// Find carousel items and add event listeners
let carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach((item) => {});

// Add listener to check if carousel item is active on state change
document.addEventListener("DOMContentLoaded", () => {
  carouselItems.forEach((item) => {
    if (item.classList.contains("active")) {
      // If so, add the bg-color to body
      document.body.style.backgroundColor = item.dataset.backgroundColor;
    }
  });
});
