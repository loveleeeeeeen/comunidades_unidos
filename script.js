document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(i) {
      slides.forEach(slide => slide.style.display = "none");
      slides[i].style.display = "block";
  }

  function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
  }

  function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // Show first image on load
  showSlide(index);
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('.mobile-nav');

  if (toggleButton && nav) {
    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  } else {
    console.error("Menu toggle or nav not found!");
  }
});
