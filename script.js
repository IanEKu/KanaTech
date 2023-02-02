const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

var swiper = new Swiper(".cards-swiper", {
  slidesPerView: 1,
  direction: "vertical",
  centeredSlides: false,
  dragable: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
