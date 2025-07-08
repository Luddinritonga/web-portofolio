// js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // Update tahun otomatis di footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Toggle hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
});
