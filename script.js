const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

var swiper = new Swiper(".cards-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  direction: getDirection(),
  centeredSlides: true,
  dragable: true,
  clickable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function getDirection() {
  var direction = window.innerWidth >= 760 ? "vertical" : "horizontal";

  return direction;
}
