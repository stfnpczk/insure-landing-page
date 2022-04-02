const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");

const toggleNavigation = () => {
  hamburger.classList.toggle("header__hamburger-active");
  modal.classList.toggle("header__navigation-open");
};

hamburger.addEventListener("click", toggleNavigation);
