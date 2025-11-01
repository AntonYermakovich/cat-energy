const burger = document.querySelector(".header__icon");
const slider = document.querySelector(".slider");
const range = document.querySelector(".slider__range input");

burger.addEventListener("click", openMenu);

function openMenu() {
  this.classList.contains("header__icon_active")
    ? this.classList.remove("header__icon_active")
    : this.classList.add("header__icon_active");
}

range.addEventListener('input', () => {
  slider.style.setProperty('--value', range.value + '%')
})
