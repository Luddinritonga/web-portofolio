// script.js
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("navList");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // Infinite carousel effect for slider
  const sliderTrack = document.getElementById("slider");
  const slides = sliderTrack.querySelectorAll(".slide");
  let position = 0;
  const speed = 1;

  // Clone slides to make seamless loop
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
  });

  function animateSlider() {
    position -= speed;
    if (Math.abs(position) >= sliderTrack.scrollWidth / 2) {
      position = 0;
    }
    sliderTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateSlider);
  }

  let animationId = requestAnimationFrame(animateSlider);

  sliderTrack.addEventListener("mouseenter", () => {
    cancelAnimationFrame(animationId);
  });

  sliderTrack.addEventListener("mouseleave", () => {
    animationId = requestAnimationFrame(animateSlider);
  });
});